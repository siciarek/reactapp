import AppStash from './AppStash'
import queryString from 'query-string'

export function getAuthCheckConfig() {
  return AppStash.get('token')
    ? {headers: {'Authorization': `Bearer ${AppStash.get('token')}`}}
    : {}
}

export function getAuthConfig(data) {
  return  {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: queryString.stringify(data),
  }
}
