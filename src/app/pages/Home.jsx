import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import config from '../config'
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    padding: 16,
  },
  image: {
    width: '100%'
  }
})

const Home = (props) => {

  const {appName, appDescription, appPicture} = config
  const {classes, location: {query: {page = 1}}} = props;

  console.log(page)

  return  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <h1>{appName}</h1>
        <p>{appDescription}</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img className={classes.image} src={appPicture}/>
      </Grid>
    </Grid>
  </div>
}

Home.defaultProps = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
