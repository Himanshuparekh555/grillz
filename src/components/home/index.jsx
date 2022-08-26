import React from "react";
import "./index.scss";
import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer";
import MainSlider from "../../components/slider/mainSlider";
import FindouRestaurant from "../../components/findouRestaurant/index";
import AdvancedBooking from "../../components/advancedBooking/index";
import Services from "../../components/services/index";
import ExploreFood from "../../components/ExploreOurFood/index";
import AppDownload from "../../components/appDownload/index";

import { ReactComponent as Mapsvg } from "../../images/map.svg";

// Material Ints
import { Box, Typography, Link } from "@mui/material";
const Home = () => {
  return (
    <>
      <Header />
      <MainSlider />
      <FindouRestaurant />
      <AdvancedBooking />
      <Services />
      <ExploreFood />
      <AppDownload />
      <Footer />
      <Box
        className="location"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Mapsvg />
          <Typography variant="caption">{"Indore"}</Typography>
        </Link>
      </Box>
    </>
  );
};

export default Home;
