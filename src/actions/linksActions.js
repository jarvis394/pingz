import axios from 'axios'

import { API_URL } from '../config'

/**
 * Fetches links list
 * 
 * @function
 * @returns {object}
 */
export const fetchLinks = () => {
  return (dispatch) => {
    dispatch ({ type: 'FETCH_LINKS' })
    
    axios.get(API_URL + '/links')
      .then(res => dispatch({
        type: 'FETCH_LINKS_FULFILLED', 
        payload: res.data.links
      }))
      .catch(e => dispatch({
        type: 'FETCH_LINKS_REJECTED',
        payload: e
      }))
  }
}
