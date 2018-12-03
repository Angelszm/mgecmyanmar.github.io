import React from 'react';
import logo from '../picture/logo.jpg';
import className from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
//import Home from "@material-ui/icons/Homeicos"

import PropTypes from "prop-types";
//import { ListItem } from 'material-ui';
//import { List } from '@material-ui/core';


const styles= theme=>({
      appBar:{
        position: 'relative',
        
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
          backgroundColor: purple[400],
        },
      },
      toolbarTitle:{
        flex:1,
        
      },



});


function NavBar(props){
  const {classes}=props;
 
    return (
     <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar} >
      <Toolbar>
      <img src={logo} alt="Kitten" height="30" width="30" data-holder-rendered="true" />
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        Myanmar Gateway Enginnering & Consultancy
        </Typography>

        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Myint</Button>
        <Button color="primary" variant="outlined" className={className(classes.margin,classes.cssRoot,classes.buttonPadding)}>Myint</Button>
      </Toolbar>

      </AppBar>


      <Toolbar>
        <Button color="primary" >Home</Button>
        <Button color="primary" >Services</Button>
        <Button color="primary" >Enginnering</Button>
        <Button color="primary" >Project</Button>
        <Button color="primary" >Others</Button>
        <Button color="primary" >About Us</Button>
        <Button color="primary" >Contact Us</Button>
        
       


      </Toolbar>

       





     </React.Fragment>
    );
  }

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

