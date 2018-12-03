import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import className from 'classnames';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Pricing from './Home';
import Civil from './Civil';
import CardServices from './card';
import Archi from './Archi';
import logo from './picture/logo.jpg';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import img1 from './picture/hex.jpg';
//import {Link } from 'react-router';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCheckSquare, faAngellist  } from '@fortawesome/fontawesome-free-solid';

//import fontawesome from "@fortawesome/fontawesome";
//import { faUser } from "@fortawesome/fontawesome-free-solid";

//fontawesome.library.add(faUser)

//import Civil1 from './picture/civil1.jpg';
import purple from '@material-ui/core/colors/purple';
import './App.css';
import Nocard from './Nocard';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative',

  },
  toolbarTitle: {
    flex: 1,
    color: 'red',
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
      buttonPadding:{
          padding: '15px',
          margin : '13px',
        
      },
      margin: {
        margin: theme.spacing.unit,
      },
      cssRoot: {
        color: theme.palette.getContrastText(purple[800]),
        border: '2px solid',
         
        backgroundColor: purple[800],
        '&:hover': {
          backgroundColor: purple[100],
        },
      },
      toolbarTitle:{
        flex:1,
        
      },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 30}px 0 ${theme.spacing.unit * 6}px`
  },
  card: {
    display: "flex"
  },
   content: {
    flex: "1 0 auto"
  },
  
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  
  Header_root:{
    paddingButtom :'20px',
  },
  cover: {
    width: 200,
    height: 200
  },
   iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);    
}

  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <StickyHeader
          header={
             <div className={classes.Header_root}>
        <AppBar position="static" color="default" className={classes.appBar}>
         

           <Toolbar>
      <img src={logo} alt="Kitten" height="35" width="35" data-holder-rendered="true" />
        <Typography variant="h5" color="textSecondary"  className={classes.toolbarTitle}>
        Myanmar Gateway Enginnering & Consultancy  
         
        
        </Typography>
        <Button>Enterprise</Button>

        <Button>Support</Button>
       <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Myanmar</Button>
       <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Singpore</Button>

      </Toolbar>
        </AppBar>
         <Toolbar>
        <Button color="primary"  variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)} >Home</Button>
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>
        Services


         </Button>

       
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Enginnering</Button>
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Project</Button>
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Others</Button>
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>About Us</Button>
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Contact Us</Button>
      </Toolbar>
        </div>
          

    }
  >
    
  </StickyHeader>




 

        <Card className={classes.card}>
          <div className={classes.details}>
            <CardMedia
              className={classes.cover}
              image=""
              title="Live from space album cover"
            />
            <CardContent className={classes.content}>
              <div>
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
                      Quickly build an effective pricing table for your
                      potential customers with this layout. It&apos;s built with
                      default Material-UI components with little customization.
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
                      Quickly build an effective pricing table for your
                      potential customers with this layout. It&apos;s built with
                      default Material-UI components with little customization.
                    </Typography>
                  </div>
                </main>
              </div>
            </CardContent>
          </div>
        </Card>

        <div>
          <Nocard />
        </div>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
