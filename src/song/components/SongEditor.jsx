import React from 'react'
import PropTypes from 'prop-types'
import {AppHeader, AppSpinner} from '../../app/widgets'
import SongEditorForm from './SongEditorForm'

class SongEditor extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {item, saveSong} = this.props

    if (!item) {
      return null
    }

    const title = item.id ? `Edit (${item.title})` : 'Add song'

    return <div>
      <AppHeader title={title}/>
      <AppSpinner/>
      <SongEditorForm initialValues={item} onSubmit={saveSong}/>
    </div>
  }
}

SongEditor.propTypes = {
  init: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

SongEditor.defaultProps = {
  init: () => {},
  item: {},
}
export default SongEditor