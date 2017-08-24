import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory as routerHistory} from 'react-router'
import {AppFloatingActionButton, AppHeader, AppSpinner} from '../../app/widgets'

const AppSimpleItem = ({description, info, returnRoute}) => {

  return <div>
    {
      (returnRoute === undefined || returnRoute === null || returnRoute.trim().length === 0)
        ? null
        : <AppFloatingActionButton action={() => routerHistory.push(returnRoute)}/>
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