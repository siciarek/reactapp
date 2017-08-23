import axios from 'axios'
import config from '../app/config'

import {
  FETCH_VIDEO,
  FETCH_VIDEO_ITEM,
} from './Video'

const fetchVideoList = () => ({type: FETCH_VIDEO, payload: axios.get(config.videoUrl)})
const fetchVideoItems = id => { return {type: FETCH_VIDEO_ITEM, payload: axios.get(`${config.videoUrl}/${id}`)}}

export {fetchVideoList, fetchVideoItems}
