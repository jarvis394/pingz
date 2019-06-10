import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { Link as LinkRouter } from 'react-router-dom'

import { Fade, Typography, Container, Button, TextField } from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

import { Links } from '../pages'

// import { getAuth } from '../utils'

const styles = theme => ({
  m2: { marginTop: theme.spacing(2) },
  m4: { marginTop: theme.spacing(4) },
  m10: { marginTop: theme.spacing(10) },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  fullWidth: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing(2),
    height: theme.spacing(6),
    fontFamily: 'Roboto, sans-serif'
  },
  size: {
    maxWidth: 342
  },
  content: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12)
  },
})

// const Link = React.forwardRef((props, ref) => (
//   <LinkRouter innerRef={ref} to="/getting-started/installation/" {...props} />
// ))

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false
    }
  }

  componentWillMount() {
    this.props.handlePage('home')
  }

  handleSubmit(e) {
    e.preventDefault()

    const url = document.getElementById('url_input').value

    if (!url) {
      this.setState({ error: true })
      return setTimeout(() => this.setState({ error: false }), 1000)
    }

    return this.props.history.push('/add?url=' + url)
  }
  
  render() {
    const { classes } = this.props
    
    return (
      <Fade in={ true }>
        <div>
          
          <Container className={ classes.content }>

            <Typography variant="h3" align="center">PINGZ</Typography>
            <Typography className={ classes.m2 } color="textSecondary" align="center">PINGz your projects for keeping them online</Typography>

            <form onSubmit={ this.handleSubmit.bind(this) } action="/add" method="GET">
              <div className={ classes.inputContainer + ' ' + classes.m10 }>
                <TextField
                  error={ this.state.error }
                  className={ classes.size }
                  onChange={ () => this.setState({ error: false }) }
                  variant="outlined" 
                  fullWidth
                  id="url_input"
                  name="url"
                  label="URL"
                  placeholder="https://glitch.com" />
              </div>

              <div className={ classes.inputContainer }>
                <Button
                  className={ classes.size + ' ' + classes.button } 
                  fullWidth 
                  variant="contained"
                  type="submit"
                  color="primary">
                  ADD
                </Button>
              </div>
            </form>

          </Container>
          
          <div className={ classes.m4 }>
            <Links />
          </div>
          
        </div>
      </Fade>
    )
  }
}

export default withRouter(withStyles(styles)(Home))
