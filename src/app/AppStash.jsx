import {Cookies} from 'react-cookie'
import config, {STORAGE_TYPE_COOKIES} from './config'

export default class AppStash {

  static getCookies = () => {
    return new Cookies()
  }

  static get = (key) => {
    if (config.hasOwnProperty('storageType') && config.storageType === STORAGE_TYPE_COOKIES) {
      return AppStash.getCookies().get(key, {path: '/'})
    }

    return localStorage.getItem(key)
  }

  static set = (key, value) => {
    if (config.hasOwnProperty('storageType') && config.storageType === STORAGE_TYPE_COOKIES) {
      return AppStash.getCookies().set(key, value, {path: '/'})
    }

    return localStorage.setItem(key, value)
  }

  static remove = (key) => {
    if (config.hasOwnProperty('storageType') && config.storageType === STORAGE_TYPE_COOKIES) {
      return AppStash.getCookies().remove(key, {path: '/'})
    }
    return localStorage.removeItem(key)
  }
}
