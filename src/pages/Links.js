import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import { Fade, List, ListItem, ListItemText, CircularProgress, Divider, Typography } from '@material-ui/core'

import { fetchLinks } from '../actions/linksActions'

import { getAuth } from '../utils.js'

import { ErrorBox } from '../components'

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
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(128px)',
    marginBottom: theme.spacing(10)
  },
})

const LinkItem = props => {
  const { name, address, interval } = props
  const primaryText = name ? name + ' • ' + address : address
  const intervalText = 'Pingz every ' + interval + ' minute' + interval === 1 ? '' : 's'
  
  return (
    <ListItem button>
      <ListItemText 
        primary={ primaryText }
        secondary={ intervalText }
        />
      <Divider />
    </ListItem>
  )
}

class Links extends Component {
  componentDidMount() {
    getAuth() && this.props.dispatch(fetchLinks())
  }
  
  render() {
    const { classes, links } = this.props
    
    if (links.fetched && !links.error) {
    return (
      <Fade timeout={ 500 } in={ true } className={ classes.content }>
          
        <List className={ classes.m1 }>
          { links.data && links.data.map((link, i) => (
              <LinkItem name={ link.name } address={ link.address } interval={ link.interval } key={ i } />
            ))
          }
        </List>
          
      </Fade>
    )
    }
    else if (links.error) {
      return <ErrorBox error={ links.error } />
    }
    else if (!getAuth()) {
      return (
        <Fade timeout={ 500 } in={ true }>
          <Typography align="center" variant="h5">Nothing there!</Typography>
        </Fade>
      )
    }
    else return (
      <div className={ classes.progress }>
        <CircularProgress />
      </div>
    )
  }
}

export default withRouter(connect(store => {
  return {
    links: store.links
  }
})(withStyles(styles)(Links)))
