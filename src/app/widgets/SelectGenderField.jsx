import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import queryString from 'query-string'
import {FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from 'material-ui'
import config from '../../app/config'

class SelectGenderField extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      value: props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  }

  componentWillMount() {

    const key = 'gender'
    const storage = localStorage

    if (storage.getItem(key) === null) {
      const url = `${config.dictionaryUrl}?${queryString.stringify({name: key})}`

      axios.get(url)
      .then((response) => {
        storage.setItem(key, JSON.stringify(response.data))
      })
      .then(() => {
        this.setState({items: JSON.parse(storage.getItem(key))})
      })
    }
    else {
      this.setState({items: JSON.parse(storage.getItem(key))})
    }
  }

  handleChange = (event, value) => {
    this.setState({value});
  }

  render() {

    if (this.state.items.length === 0) {
      return null
    }

    const {items} = this.state
    const {label, name, onChange} = this.props

    return <FormControl component="fieldset" required>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={this.state.value}
        onChange={!onChange ? this.handleChange : onChange}
      >
        {
          items.map(({name, value}) => <FormControlLabel
            key={value}
            value={value}
            label={name}
            control={<Radio checked={this.state.value === value}/>}
          />)
        }
      </RadioGroup>
    </FormControl>
  }
}

SelectGenderField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

SelectGenderField.defaultProps = {
  name: 'gender',
  value: 'u',
  label: 'Gender',
}

export default SelectGenderField
