import { setAuth } from '../utils'

/**
 * Authorization reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = {
  register: {
    fetching: false,
    fetched: false, 
    error: null,
  },
  login: {
    fetching: false,
    fetched: false, 
    error: null,
    access_token: null,
    refresh_token: null,
    exp: null
  },
  errorPopupOpen: false
}, action) {
  switch (action.type) {
    // Register
    case 'REGISTER': {
      return { 
        ...state,
        errorPopupOpen: false,
        register: {
          fetched: false,
          error: null,
          fetching: true
        }
      }
    }
    
    case 'REGISTER_FULFILLED': {
      return { 
        ...state,
        register: {
          ...state.register,
          fetching: false, 
          fetched: true
        }
      }
    }
    
    case 'REGISTER_REJECTED': {
      return { 
        ...state,
        register: {
          ...state.register,
          fetching: false,
          error: action.payload
        },
        errorPopupOpen: true
      }
    }
     
    // Login
    case 'LOGIN': {
      return { 
        ...state,
        errorPopupOpen: false,
        login: {
          ...state.login,
          error: null,
          fetched: false,
          fetching: true
        }
      }
    }
      
    case 'LOGIN_FULFILLED': {
      const { access_token, refresh_token, exp } = action.payload
      
      setAuth({
        access_token: access_token,
        refresh_token: refresh_token,
        exp: exp
      })
      
      return { 
        ...state,
        login: {
          ...state.login,
          fetching: false, 
          fetched: true,
          access_token: access_token,
          refresh_token: refresh_token,
          exp: exp
        }
      }
    }
      
    case 'LOGIN_REJECTED': {
      return { 
        ...state,
        login: {
          ...state.login,
          fetching: false,
          error: action.payload
        },
        errorPopupOpen: true
      }
    }
      
    case 'ERROR_POPUP_OPEN': {
      return { 
        ...state,
        errorPopupOpen: true
      }
    }
      
    case 'ERROR_POPUP_CLOSE': {
      return { 
        ...state,
        errorPopupOpen: false
      }
    }
    
    default: return state
  }
}
