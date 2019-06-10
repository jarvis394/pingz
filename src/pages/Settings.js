import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import { withRouter } from 'react-router'

import {
  withStyles
} from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
  Switch,
  Fade,
  Typography
} from '@material-ui/core'

import {
  setPaletteType
} from '../actions/themeActions'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  },
  content: {
    maxWidth: 500,
    margin: "auto"
  },
  m1: {
    marginTop: theme.spacing(1)
  }
})

class Settings extends Component {
  changeTheme() {
    let t = this.props.theme.palette.type === "light" ? "dark" : "light"
    this.props.dispatch(setPaletteType(t))
  }

  componentWillMount() {
    this.props.handlePage('commands')
  }
  
  render() {
    const { classes, theme } = this.props
    const type = theme.palette.type
    
    return (
      <Fade in={ true }>
        <div className={ classes.content }>
          <Container><Typography variant="h4">Settings</Typography></Container>
          
          <List 
            className={ classes.m1 }>
            <ListItem 
              button 
              onClick={ this.changeTheme.bind(this) }>
              <ListItemText 
                secondary={ type === 'light' ? 'Now is light theme' : 'Now is dark theme' } 
                primary={ "Enable dark theme" } />
              <Switch 
                checked={ type === "dark" }
                color="primary" />
            </ListItem>
            <Divider />
          </List>
          
        </div>
      </Fade>
    )
  }
}

export default withRouter(connect(store => {
  return {
    theme: store.theme
  }
})(withStyles(styles)(Settings)))
