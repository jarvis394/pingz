import theme from '../theme'

let type = localStorage.getItem('theme')

if (!type) {
  type = 'light'
  localStorage.setItem('theme', type)
}

/**
 * Theme reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = theme, action) {
  switch (action.type) {
    case 'THEME_PALETTE_TYPE_SET': {
      state.palette.type = action.payload
      localStorage.setItem('theme', action.payload)
      
      return {
        ...state
      }
    }
    
    default: return state
  }
}
