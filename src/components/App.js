// React
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

// Material UI
import { withStyles } from '@material-ui/core/styles'

// Pages
import { Home, Settings, NotFound, Login, Register, Add } from '../pages'

// Components
import { NavBar } from '../components'

const styles = theme => ({
  content: {
    paddingTop: theme.spacing(12),
  },
  button: {
    position: 'fixed',
    right: theme.spacing(1),
    top: theme.spacing(1)
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: 'home'
    }
    this.handlePage = this.handlePage.bind(this)
  }
  
  handlePage(p) {
    this.setState({ page: p })
  }
  
  render() {
    const { classes, history } = this.props
    
    return (
      <div className="App">
        
        { this.state.page !== 'notfound' && <NavBar history={ history } page={ this.state.page } /> }

        <div className={ classes.content }>
          <Switch>
            <Route exact path="/" render={ () => <Home handlePage={ this.handlePage } /> } />
            <Route exact path="/add" render={ () => <Add handlePage={ this.handlePage } /> } />
            <Route exact path="/settings" render={ () => <Settings handlePage={ this.handlePage } /> } />
            <Route exact path="/login" render={ () => <Login handlePage={ this.handlePage } /> } />
            <Route exact path="/register" render={ () => <Register handlePage={ this.handlePage } /> } />

            <Route exact path="*" render={ () => <NotFound handlePage={ this.handlePage } /> } />
          </Switch>
        </div>
        
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(App))
