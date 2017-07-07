import React from 'react'
import {AppFloatingActionButton, AppHeader, AppSpinner} from '../../app/components'

const AppSimpleItem = ({description, info, returnRoute}) => {

  return <div>
    {
      (returnRoute === undefined || returnRoute === null || returnRoute.trim().length === 0)
        ? null
        : <AppFloatingActionButton route={returnRoute}/>
    }
    <AppSpinner/>
    <AppHeader title={description}/>
    <pre className='text'>{info}</pre>
  </div>
}

export default AppSimpleItem