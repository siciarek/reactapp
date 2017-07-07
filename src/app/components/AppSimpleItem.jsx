import React from 'react'
import PropTypes from 'prop-types'
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

AppSimpleItem.propTypes = {
  description: PropTypes.string.isRequired,
  info: PropTypes.string,
  returnRoute: PropTypes.string,
}

AppSimpleItem.defaultProps = {
  description: 'Item',
  info: null,
  returnRoute: null,
}

export default AppSimpleItem