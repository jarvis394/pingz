
/**
 * Links reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = {
  fetching: false,
  fetched: false, 
  error: null, 
  data: []
}, action) {
  switch (action.type) {
    case 'FETCH_LINKS': {
      return { 
        ...state,
        fetching: true
      }
    }
    
    case 'FETCH_LINKS_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        data: action.payload
      }
    }
    
    case 'FETCH_LINKS_REJECTED': {
      return {
        ...state,
        error: action.payload
      }
    }
    
    default: return state
  }
}
