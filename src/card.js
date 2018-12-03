import React, { Component } from 'react';
import Civil from './Civil';

import Archi from './Archi';
import Mech from './Mech';

import className from 'classnames';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  card1: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
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
const featured = [
  {
    title: 'Feature',
    date: 'Nov 1',
    description: 'Nice'
  }
];

class CardServices extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Card className={classes.card1}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="140"
              image="data:image/png;base64,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"
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

CardServices.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardServices);
