import React from 'react';
import { Container, AppBar, Typography} from '@material-ui/core';
import spanner from '../../../images/BlackSpanner.png';
import useStyles from './styles';
import useStylesAboutUs from './AboutUsStyle';
import Christos from '../../../images/Christos.jpg';
import Ruby from '../../../images/Ruby.jpg';
import Leo from '../../../images/Leo.jpg';

function AboutUs() {
    const classes = useStyles();
    const classestwo = useStylesAboutUs();
    return (
        <Container maxWidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">About Us</Typography>
        <img className={classes.image} src={spanner} alt="icon" height="60" />
        </AppBar>
        <div className={classestwo.photos} >
        <img src={Christos} className={classestwo.photo} alt="christos"/>
        <img src={Ruby} className={classestwo.photo} alt="ruby"/>
        <img src={Leo} className={classestwo.photo} alt="leo"/>
        </div>
        <div className={classestwo.para}> 
        <h2>Hello and welcome to the MechProjects Website!!<br /> </h2>
        <p> The main purpose of me building this website was to
            learn how to create and deploy a full mern stack web application and here we are yay. The secondary purpose 
            is to create a platform where I can upload projects that we have done so we can look back 
            and see cool achievements.If you would like to add some projects feel free to log in and make a post of your project
            anything is welcome.
            <br />
            Page features :Christos, Ruby and Leo :)
            <br /><br />
            Thanks for visiting !
            </p>
        </div>
      
   
        </Container>
    )
}

export default AboutUs