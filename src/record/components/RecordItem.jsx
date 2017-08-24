import React from 'react'
import PropTypes from 'prop-types'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/widgets'

class RecordItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {


    const {title, artists, cover, tracks} = this.props.item


    if (!artists) {
      return null
    }

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

      <AppFloatingActionButton action={() => this.props.router.push(`/records`)}/>
      <AppSpinner/>
    </div>
  }
}

RecordItem.propTypes = {
  init: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

RecordItem.defaultProps = {
  init: () => {},
  item: {},
}

export default RecordItem
