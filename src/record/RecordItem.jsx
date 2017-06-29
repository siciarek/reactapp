import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Card, CardMedia, CardTitle} from 'material-ui'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchRecordItem} from './RecordActions'

class RecordItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchRecordItem(this.props.params.id))
  }

  render() {

    if (typeof this.props.current.artists === 'undefined') {
      return <AppSpinner/>
    }

    const {title, artists, cover, tracks} = this.props.current

    return <div>
      <AppHeader title={title}/>

      <br/>
      <div style={{padding: 16}}>
        <h2>{artists.map(e => e.name).join(', ')}</h2>
        <br/>

        <img src={cover} alt={title} style={{width: 300}}/>

        <ul>
          {
            tracks.map(e => {
              return <li key={e.id}>{e.title}/{e.length}</li>
            })
          }
        </ul>

      </div>

      <AppFloatingActionButton route={`/records`}/>
      <AppSpinner/>
    </div>
  }
}

RecordItem.defaultProps = {
  id: PropTypes.number.isRequired,
}

export default connect((store) => {
  return {
    current: store.record.current,
  }
})(RecordItem)