import {
  APP_TOGGLE_MENU,
  APP_SET_TARGET_ROUTE,
  APP_UNSET_TARGET_ROUTE,
  APP_START_PROCESSING,
  APP_END_PROCESSING,
  APP_ERROR_OCCURRED,
  APP_ERROR_HIDE,
  APP_NOTIFICATION_OCCURRED,
  APP_NOTIFICATION_HIDE,
} from './AppActionTypes'

import config from './config'

const DEFAULT_STATE = {
  version: config.version,
  processing: false,
  menu: false,
  targetRoute: null,
  notificationType: null,
  notification: null,
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case APP_TOGGLE_MENU: {
      return {
        ...state,
        menu: !state.menu
      }
    }
    case APP_SET_TARGET_ROUTE: {
      return {
        ...state,
        targetRoute: action.payload
      }
    }
    case APP_UNSET_TARGET_ROUTE: {
      return {
        ...state,
        targetRoute: null
      }
    }
    case APP_START_PROCESSING: {
      return {
        ...state,
        processing: true
      }
    }
    case APP_END_PROCESSING: {
      return {
        ...state,
        processing: false
      }
    }
    case APP_ERROR_OCCURRED: {
      return {
        ...state,
        processing: false,
        notificationType: 'error',
        notification: action.payload,
      }
    }

    case APP_NOTIFICATION_OCCURRED: {
      return {
        ...state,
        processing: false,
        notificationType: 'notification',
        notification: action.payload,
      }
    }
    case APP_NOTIFICATION_HIDE: {
      return {
        ...state,
        notificationType: null,
        notification: null,
      }
    }

    default:
      return state
  }
}