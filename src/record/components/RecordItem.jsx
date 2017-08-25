import React from 'react'
import PropTypes from 'prop-types'
import {uniq} from 'lodash'
import {grey} from 'material-ui/colors'
import {
  AppHeader,
  AppSpinner,
  AppFloatingActionButton
} from '../../app/widgets'

const coverStyle = {
  backgroundColor: grey[400],
  display: 'block',
  width: 300,
  height: 300,
  marginTop: 16,
  marginBottom: 16
}

class RecordItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {


    const {title, artists, cover, tracks} = this.props.item


    if (!artists) {
      return <AppSpinner/>
    }


    const sides = uniq(tracks.map(e => e.side))

    let side = 0
    let sideRow = null

    let tracksPerSide = tracks.map(e => {
      sideRow = null

      if (sides.length > 1 && e.side !== side) {
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
      <AppFloatingActionButton action={() => this.props.router.push(`/records`)}/>
      <AppHeader title={title}/>
      <br/>
      <div style={{padding: 16}}>
        <h2>{artists.map(e => e.name).join(', ')}</h2>
        <img src={cover} alt={title} style={coverStyle}/>
        <ul style={{margin: 0, padding: 0, listStyleType: 'none'}}>
          {tracksPerSide}
        </ul>
        <br/>
        <br/>
        <br/>
      </div>
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
