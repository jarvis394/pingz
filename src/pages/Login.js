import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { Typography, Snackbar, Container, FormControl, Button, InputLabel, Input } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { auth } from '../actions/authActions'
import { getAuth } from '../utils'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(4)
  },
  link: {
    color: theme.palette.primary.main
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(8)
  },
  formControl: {
    width: '100%',
    maxWidth: 300,
    marginTop: theme.spacing(2)
  },
  submit: {
    fontFamily: 'Roboto, sans-serif',
  },
})

class Auth extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      error: {
        nick: false,
        password: false
      }
    }
  }
  
  componentWillMount() {
    this.props.handlePage('auth')
  }
  
  handleSubmit(e) {
    e.preventDefault()
    
    let nick = document.getElementById('nick').value
    let password = document.getElementById('password').value
    
    if (!nick) return this.setState({
      error: {
        nick: true
      }
    })
    else if (!password) return this.setState({
      error: {
        password: true
      }
    })
    
    this.props.dispatch(auth(nick, password))
  }
  
  render() {
    const { classes, auth, errorPopupOpen } = this.props
      
    return (
      <Container> 
        
        <Snackbar 
          open={ errorPopupOpen }
          message={ auth.error && auth.error.response.body.message } />
        
        <form className={ classes.centered } onSubmit={ this.handleSubmit.bind(this) }>
          <Typography align="center" variant="h4">Authorization</Typography>

          <FormControl className={ classes.formControl }>
            <InputLabel htmlFor="nick">Nickname</InputLabel>
            <Input 
              error={ this.state.error.nick } 
              onChange={ () => this.setState({ error: { nick: false } }) }
              fullWidth
              id="nick" 
              name="nick" />
          </FormControl>
          
          <FormControl className={ classes.formControl }>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input 
              error={ this.state.error.password } 
              onChange={ () => this.setState({ error: { password: false } }) }
              fullWidth 
              id="password" 
              name="password"
              type="password" />
          </FormControl>

          <Button 
            color="primary"
            type="submit"
            className={ classes.formControl + ' ' + classes.submit } 
            variant="contained"
            disabled={ auth.fetching }>
            LOGIN
          </Button>
                    
          <Typography className={ classes.pos } paragraph>
            Don't have an account? &nbsp;
            <Link className={ classes.link } to="/register">
              Register
            </Link>
          </Typography>
        </form>
        
      </Container>
    )
  }
}

export default connect(store => {
  return {
    auth: store.auth.login,
    errorPopupOpen: store.auth.errorPopupOpen
  }
})(withStyles(styles)(Auth))