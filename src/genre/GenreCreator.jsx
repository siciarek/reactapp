import React from 'react'
import {connect} from 'react-redux'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../app/components'
import {GenreForm}  from './components'
import {fetchItemGenre} from './GenreActions'

class GenreCreator extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchItemGenre(null))
  }

  render() {

    if(this.props.item.id !== null) {
      return <AppSpinner/>
    }

    return (
      <div>
        <AppSpinner/>
        <AppHeader title="Add genre"/>

        <GenreForm
          current={this.props.item}
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
})(GenreCreator)