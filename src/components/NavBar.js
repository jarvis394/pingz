import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Fade, useScrollTrigger } from '@material-ui/core'

import SettingsIcon from '@material-ui/icons/SettingsRounded'
import BackIcon from '@material-ui/icons/ArrowBack'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(0),
  },
})

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  })

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  })
}

class NavBar extends Component {
  render() {
    const { classes, page } = this.props
    const state = page === 'home' 
    
    return (
      <ElevationScroll {...this.props}>  
        <AppBar className={ classes.grow } color="default" position="fixed">
          <Toolbar>
            
            <Fade in={ !state }>
              <IconButton
                edge="start"
                onClick={ () => this.props.history.goBack() }
              >
                <BackIcon />
              </IconButton>
            </Fade>
            
            <div className={ classes.grow }></div>
            
            <Fade in={ true }>
              <IconButton 
                edge="end" 
                onClick={ () => this.props.history.push('/settings') } 
                className={ classes.button }
                aria-label="Settings"
              >
                <SettingsIcon />
              </IconButton>
            </Fade>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    )
  }
}

export default connect(store => {
  return {
    
  }
})(withStyles(styles)(NavBar))
