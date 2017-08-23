import axios from 'axios'
import config from '../app/config'

import {
  FETCH_AUDIO,
  FETCH_AUDIO_ITEM,
} from './Audio'

const fetchAudioList = () => ({type: FETCH_AUDIO, payload: axios.get(config.audioUrl)})
const fetchAudioItems = id => ({type: FETCH_AUDIO_ITEM, payload: axios.get(`${config.audioUrl}/${id}`)})

export {fetchAudioList, fetchAudioItems}
