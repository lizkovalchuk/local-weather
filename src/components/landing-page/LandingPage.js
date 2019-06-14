import React, { Component } from "react";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import CustomButton from "../common/button";
import "./landing-page.scss";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      long: null
    };
  }

  render() {
    return (
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom id="body__typography_h1">
          Local Weather App
        </Typography>
        <Typography variant="h2" gutterBottom id="body__typography_h2">
          by Liz Kovalchuk
        </Typography>
        <Grid container justify="center" id="body__typography_body1">
          <Typography variant="body1">
            Click the button below to get your location to see your local
            weather.
          </Typography>
          <Grid container item xs={6} justify="center" id="body__grid_button">
            <CustomButton text="Get location" />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default LandingPage;
