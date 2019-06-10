import { combineReducers } from 'redux'

// Reducers
import theme from './themeReducer'
import auth from './authReducer'
import links from './linksReducer'

export default combineReducers({
  theme,
  auth,
  links
})