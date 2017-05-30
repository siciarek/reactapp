import AppStash from './AppStash'

export function getAuthHeaders() {
  return AppStash.get('token')
    ? {headers: {'Authorization': `Bearer ${AppStash.get('token')}`}}
    : {}
}
