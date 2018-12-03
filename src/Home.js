import React, { Component } from 'react';

import './App.css';
import Civil from './Civil';

import Archi from './Archi';
import Mech from './Mech';
import className from 'classnames';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});
const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
];
const featuredStyle = [
  {
    title: 'Featured Style',
    date: 'Nov 1',
    description: 'Nice'
  }
];

class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <main className={classes.layout}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Mission
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              component="p"
            >
              Quickly build an effective pricing table for your potential
              customers with this layout. It&apos;s built with default
              Material-UI components with little customization.
            </Typography>

            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Vision
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              component="p"
            >
              Quickly build an effective pricing table for your potential
              customers with this layout. It&apos;s built with default
              Material-UI components with little customization.
            </Typography>
          </div>
        </main>
        <Grid container spacing={40} className={classes.cardGrid}>
          {featuredPosts.map(post => (
            <Grid item key={post.title} xs={12} md={6}>
              <Card className={classes.card}>
                <HashRouter>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        <NavLink to="/Civil">Continue Reading</NavLink>
                      </Typography>
                    </CardContent>
                    <Route path="/Civil" component={Civil} />
                  </div>
                </HashRouter>

                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} />
                </Hidden>
              </Card>
            </Grid>
          ))}

          {featuredStyle.map(style => (
            <Grid item key={style.title} xs={12} md={6}>
              <Card className={classes.card}>
                <HashRouter>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {style.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {style.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {style.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        <NavLink to="/Archi">Continue Reading</NavLink>
                      </Typography>
                    </CardContent>
                    <Route path="/Archi" component={Archi} />
                  </div>
                </HashRouter>

                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} />
                </Hidden>
              </Card>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pricing);
