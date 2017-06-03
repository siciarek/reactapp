import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../app/components'
import {GenreForm}  from './components'
import {fetchItemGenre} from './GenreActions'

class GenreEditor extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchItemGenre(this.props.router.params.id))
  }

  render() {

    if(this.props.item.id === null) {
      return <AppSpinner/>
    }

    return (
      <div>
        <AppSpinner/>
        <AppHeader title="Edit genre"/>

        <GenreForm
          item={this.props.item}
          dispatch={this.props.dispatch}
        />

        <AppFloatingActionButton route="/genre/list"/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    item: store.genre.current,
  }
})(withRouter(GenreEditor))