import React from 'react'
import PropTypes from 'prop-types'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/widgets'
import {uniq} from 'lodash'

class RecordItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {


    const {title, artists, cover, tracks} = this.props.item


    if (!artists) {
      return null
    }


    const sides = uniq(tracks.map(e => e.side))

    let side = 0
    let sideRow = ''

    let tracksPerSide = tracks.map(e => {
      sideRow = ''

      if(sides.length > 1 && e.side !== side) {
        side = e.side
        sideRow = <div><br/><strong>Side {e.side}</strong></div>
      }

      return <li key={e.id}>
        {sideRow}
        <span style={{display: 'inline-block', paddingRight: 16}}>{e.length}</span>
        {e.title}
      </li>
    })


    return <div>
      <AppHeader title={title}/>

      <br/>

      <div style={{padding: 16}}>
        <h2>{artists.map(e => e.name).join(', ')}</h2>

        <img src={cover} alt={title} style={{width: 300, marginTop: 16, marginBottom: 16}}/>

        <ul style={{margin: 0, padding: 0, listStyleType: 'none'}}>
          {tracksPerSide}
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
  init: () => {
  },
  item: {},
}

export default RecordItem
