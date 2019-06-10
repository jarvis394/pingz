import rp from 'request-promise-native'

import { API_URL, popupTimeout } from '../config'

export const register = (nick, password) => {
  return (dispatch) => {
    dispatch({ type: 'REGISTER' })
    
    rp({
      url: API_URL + '/register',
      method: 'POST',
      body: {
        nick: nick,
        password: password
      },
      json: true
    })
      .then(res => dispatch({
        type: 'REGISTER_FULFILLED', 
      }))
      .catch(e => {
        dispatch({
          type: 'REGISTER_REJECTED',
          payload: e
        })
      
        setTimeout(() => dispatch({
          type: 'ERROR_POPUP_CLOSE',
        }), popupTimeout)
      })
  }
}

export const auth = (nick, password) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN' })
    
    rp({
      url: API_URL + '/auth', 
      method: "POST",
      body: {
        nick: nick,
        password: password
      },
      json: true
    })
      .then(res => dispatch({
        type: 'LOGIN_FULFILLED', 
        payload: res
      }))
      .catch(e => {
        dispatch({
          type: 'LOGIN_REJECTED',
          payload: e
        })
      
        setTimeout(() => dispatch({
          type: 'ERROR_POPUP_CLOSE',
        }), popupTimeout)
      })
  }
}
