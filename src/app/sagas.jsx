// Tests only, there is no usefull logic yet.

import {delay} from 'redux-saga'
import {takeLatest, all} from 'redux-saga/effects'

export function* showTheMessage() {
  yield delay(3000)
  console.log('There is something from SAGA!')
}

export function* watchShowingTheMessage() {
  yield takeLatest('AUTH_USER', showTheMessage)
}

export default function* rootSaga() {
  yield all([
    watchShowingTheMessage(),
  ])
}