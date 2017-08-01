import store from './store'
import {fetchArtistList} from '../artist/ArtistActions'
import {fetchAuthorList} from '../author/AuthorActions'

export const onEnterAuthor = () => store.dispatch(fetchAuthorList())
export const onEnterArtist = () => store.dispatch(fetchArtistList())