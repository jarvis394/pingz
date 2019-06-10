import { blue, pink } from '@material-ui/core/colors'

const theme = {
  palette: {
    type: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
    primary:{
      main: blue.A400,
    },
    secondary: pink,
  },
  typography: {
    fontFamily: 'GS-Regular, sans-serif'
  }
}

export default theme