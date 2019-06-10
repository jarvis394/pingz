import React, { Component } from 'react'
import { connect } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import App from './App'

class Layout extends Component {
  render() {
    let { theme } = this.props
    
    return (
      <MuiThemeProvider theme={ createMuiTheme(theme) }>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default connect(store => {
  return {
    theme: store.theme
  }
})(Layout)