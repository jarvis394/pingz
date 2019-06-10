import React, { Component } from 'react'

import { Typography, Container } from '@material-ui/core'

class NotFound extends Component {
  componentWillMount() {
    this.props.handlePage('notfound')
  }
  
  render() {
    return (
      <Container>
        
        <Typography variant="h5">Seems like you've got into a wrong page...</Typography>
        
      </Container>
    )
  }
}

export default NotFound
