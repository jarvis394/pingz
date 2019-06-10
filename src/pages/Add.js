import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Container, Fade } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { getAuth } from '../utils'

const styles = theme => ({

})

class Add extends Component {
  componentWillMount() {
    this.props.handlePage('add')
  }

  render() {
    return (
      <Fade in={ true }>
        <Container>

          { !getAuth() && <Redirect to="/login" /> }

        </Container>
      </Fade>
    )
  }
}

export default withStyles(styles)(Add)
