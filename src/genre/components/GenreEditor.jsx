import React from 'react'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../../app/widgets'
import GenreForm from './GenreForm'

class GenreEditor extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {title, onSubmit, router, item} = this.props

    if (typeof item.id === 'undefined' || item.id === null) {
      return null
    }

    return (
      <div>
        <AppSpinner/>
        <AppHeader title={title}/>

        <br/>
        <GenreForm onSubmit={onSubmit} initialValues={item}/>

        <AppFloatingActionButton action={() => router.push('/genre/list')}/>
      </div>
    )
  }
}

export default GenreEditor