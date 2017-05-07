import {takeEvery, put, all} from 'redux-saga/effects'

import {
  APP_START_PROCESSING,
  APP_END_PROCESSING
} from './AppActionTypes'

import {
  LYRICS_LIST_FETCH,
  LYRICS_LIST_FETCH_FULLFILLED,
  LYRICS_LIST_FETCH_REJECTED,
  LYRICS_ITEM_FETCH,
  LYRICS_ITEM_FETCH_FULLFILLED,
  LYRICS_ITEM_FETCH_REJECTED,
} from '../lyrics/Lyrics'

export function* runTheSpinner() {
  yield put({type: APP_START_PROCESSING});
}

export function* stopTheSpinner() {
  yield put({type: APP_END_PROCESSING});
}

export function* watchTheSpinner() {
  yield takeEvery([
    LYRICS_LIST_FETCH,
    LYRICS_ITEM_FETCH
  ], runTheSpinner)

  yield takeEvery([
    LYRICS_LIST_FETCH_FULLFILLED,
    LYRICS_LIST_FETCH_REJECTED,
    LYRICS_ITEM_FETCH_FULLFILLED,
    LYRICS_ITEM_FETCH_REJECTED
  ], stopTheSpinner)
}

export default function* rootSaga() {
  yield all([
    watchTheSpinner(),
  ])
}