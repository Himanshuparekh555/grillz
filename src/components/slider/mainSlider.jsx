import React from "react";
import "./index.scss";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import foodSVG from "../../images/food.svg";

// Material Ints
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { height } from "@mui/system";

// Slider options
const mainsliderproperties = {
  duration: 4000,
  autoplay: false,
  transitionDuration: 500,
  arrows: true,
  infinite: true,
  easing: "ease",
  indicators: false,
};

// Slider Data
const slideImages = [
  {
    url: "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661162088356.png",
    caption2: "Discover Restaurant & Delicious Food",
  },
  {
    url: "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661162088356.png",
    caption2: "Delicious Italian Home Made Cuisine",
  },
];

// Autocomplete Data
const top100Films = [
  { title: "Sandwich" },
  { title: "Burger" },
  { title: "Pizza" },
  { title: "Mexican" },
  { title: "Pancake" },
  { title: "Blueberries" },
  { title: "Leafy green vegetables" },
];

const mainSlider = ({}) => {
  return (
    <>
      <section className="main_slider">
        <Container>
          <Fade {...mainsliderproperties}>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    xs={12}
                    sm={12}
                    md={10}
                    lg={6}
                    item
                    order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
                  >
                    <Box className="slider-content">
                      <img className="food-svg" src={foodSVG} />
                      <Typography className="text " variant="h2" gutterBottom>
                        {slideImage.caption2}
                      </Typography>
                      <Box
                        className="search_box"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Autocomplete
                          underlineStyle={{ display: "none" }}
                          style={{ width: "100%" }}
                          freeSolo
                          id="free-solo-2-demo"
                          disableClearable
                          options={top100Films.map((option) => option.title)}
                          renderInput={(params) => (
                            <TextField
                              style={{ height: "100%" }}
                              {...params}
                              placeholder="search restaurant,food"
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                              }}
                            />
                          )}
                        />
                        <Button variant="contained" className="primary-btn">
                          {"GO"}
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    md={10}
                    lg={6}
                    item
                    order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                  >
                    <Box className="img">
                      <img src={slideImage.url} className="w-100" />
                    </Box>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default mainSlider;
