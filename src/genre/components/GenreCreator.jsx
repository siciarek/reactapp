import React from 'react'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../../app/components'
import GenreForm from './GenreForm'

const GenreCreator = ({title, onSubmit, router}) => {

  return <div>
    <AppSpinner/>
    <AppHeader title={title}/>

    <br/>

    <GenreForm onSubmit={onSubmit}/>

    <AppFloatingActionButton action={() => router.push('/genre/list')}/>
  </div>
}

export default GenreCreator