import React, { Component } from "react";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import MyButton from "../layout/button";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      location: ""
    };
  }

  render() {
    const location = () => {
      console.log("location getting hit");
    };

    location();

    return (
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Local Weather App
        </Typography>
        <Typography variant="h2" gutterBottom>
          by Liz Kovalchuk
        </Typography>
        <Grid container spacing={3} justify="center">
          <Typography variant="body1">
            This App will ask for your current location. If it does not, click
            on the button below.
          </Typography>
          <Grid item xs={6}>
            {/* <Paper className={classes.paper}>xs=6</Paper> */}
            {/* <Button className={classes.root}>Get Location</Button> */}
            <MyButton />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default LandingPage;
