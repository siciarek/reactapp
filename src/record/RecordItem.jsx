import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
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

        <img src={cover} alt={title} style={{width: 300, marginTop: 16, marginBottom: 16}}/>

        <ul style={{margin:0, padding:0, listStyleType: 'none'}}>
          {
            tracks.map(e => {
              return <li key={e.id}>
                <span style={{display: 'inline-block', paddingRight: 16}}>{e.length}</span>
                {e.title}
                </li>
            })
          }
        </ul>


        <br/>
        <br/>
        <br/>

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