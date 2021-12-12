import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./istockphoto-1055026614-170667a.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },

  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="outlined"
            variant="h3"
            style={{
              fontWeight: "",
              marginBottom: 15,
              fontFamily: "Roboto",
              color: "#81c725",
            }}
          >
            FINAL PROJECT
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#81c725",
              textTransform: "capitalize",
              fontFamily: "Roboto",
            }}
          >
            
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
