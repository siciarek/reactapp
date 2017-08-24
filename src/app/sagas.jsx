import {takeEvery, takeLatest, put, all} from 'redux-saga/effects'
import {PENDING, FULFILLED, REJECTED} from 'redux-promise-middleware'

import {
  APP_START_PROCESSING,
  APP_END_PROCESSING,
  APP_ERROR_OCCURRED,
  APP_ERROR_HIDE,
  APP_NOTIFICATION_OCCURRED,
} from './AppActionTypes'

import {
  GENRE_ITEM_ADD_FULFILLED,
  GENRE_ITEM_SAVE_FULFILLED,
} from '../genre/Genre'

import {
  USER_AUTH_CHECK,
  USER_SAVE_FULFILLED,
} from '../user/User'

// Spinner

export function* runTheSpinner() {
  yield put({type: APP_START_PROCESSING})
}

export function* stopTheSpinner() {
  yield put({type: APP_END_PROCESSING})
}

export function* watchTheSpinner() {
  yield takeEvery(({type}) =>  type.endsWith(PENDING), runTheSpinner)
  yield takeLatest(({type}) =>  type.endsWith(FULFILLED) || type.endsWith(REJECTED), stopTheSpinner)
}

// Error notification

export function* showErrorNotification(action) {

  let payload = {code: 500, message: action.type}

  try {
    payload = action.payload.response.data
  }
  catch (e) {

  }

  yield put({type: APP_ERROR_OCCURRED, payload: payload})
}

export function* watchErrorNotifications() {
  yield takeEvery(({type}) => true === type.endsWith(REJECTED) && false === type.startsWith(USER_AUTH_CHECK) , showErrorNotification)
}

// Notification

export function* showNotification(action) {
  yield put({type: APP_NOTIFICATION_OCCURRED, payload: {code: 200, message: 'Operation succeed'}})
}

export function* watchNotifications() {
  yield takeLatest([
    GENRE_ITEM_ADD_FULFILLED,
    GENRE_ITEM_SAVE_FULFILLED,
    USER_SAVE_FULFILLED,
  ], showNotification)
}

// Root function

export default function* rootSaga() {
  yield all([
    watchTheSpinner(),
    watchNotifications(),
    watchErrorNotifications(),
  ])
}
