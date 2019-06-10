import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Fade, Container } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class ErrorBox extends Component {
  render() {
    const { error, classes } = this.props
    
    return (
      <Fade in={ true }>
        <Container className={ classes.root }>
          <Typography variant="h5">{ error.message }</Typography>
        </Container>
      </Fade>
    )
  }
}

export default withStyles(styles)(ErrorBox)