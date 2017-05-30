import GenreList from './GenreList'
import GenreItem from './GenreItem'
import GenreEditor from './GenreEditor'
import GenreActions from './GenreActions'

export {GenreList, GenreItem, GenreActions, GenreEditor}

export const
  GENRE_LIST_FETCH = 'GENRE_LIST_FETCH',
  GENRE_LIST_FETCH_FULLFILLED = 'GENRE_LIST_FETCH_FULLFILLED',
  GENRE_LIST_FETCH_REJECTED = 'GENRE_LIST_FETCH_REJECTED',
  GENRE_ITEM_FETCH = 'GENRE_ITEM_FETCH',
  GENRE_ITEM_FETCH_FULLFILLED = 'GENRE_ITEM_FETCH_FULLFILLED',
  GENRE_ITEM_FETCH_REJECTED = 'GENRE_ITEM_FETCH_REJECTED',
  GENRE_ITEM_ADD = 'GENRE_ITEM_ADD',
  GENRE_ITEM_ADD_FULLFILLED = 'GENRE_ITEM_ADD_FULLFILLED',
  GENRE_ITEM_ADD_REJECTED = 'GENRE_ITEM_ADD_REJECTED',
  GENRE_ITEM_SAVE = 'GENRE_ITEM_SAVE',
  GENRE_ITEM_SAVE_FULLFILLED = 'GENRE_ITEM_SAVE_FULLFILLED',
  GENRE_ITEM_SAVE_REJECTED = 'GENRE_ITEM_SAVE_REJECTED',
  GENRE_ITEM_UPDATE = 'GENRE_ITEM_UPDATE',
  GENRE_ITEM_UPDATE_FULLFILLED = 'GENRE_ITEM_UPDATE_FULLFILLED',
  GENRE_ITEM_UPDATE_REJECTED = 'GENRE_ITEM_UPDATE_REJECTED',
  GENRE_ITEM_REMOVE = 'GENRE_ITEM_REMOVE',
  GENRE_ITEM_REMOVE_FULLFILLED = 'GENRE_ITEM_REMOVE_FULLFILLED',
  GENRE_ITEM_REMOVE_REJECTED = 'GENRE_ITEM_REMOVE_REJECTED'