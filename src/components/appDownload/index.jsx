import React from "react";
import "./index.scss";
import Appscreen from "../../images/app-screen.png";
import AppStore from "../../images/App_Store_Badge.png";
import PlayStore from "../../images/google-play-badge.png";
// Material Ints
import { Container, Grid, Typography, Box, Link } from "@mui/material";

const AppDownload = () => {
  return (
    <>
      <Box
        className="app_sec"
        sx={{
          pt: 5,
          mt: 30,
          mb: 10,
        }}
      >
        <Container>
          <Grid container className="row">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
              sx={{
                mt: 3,
                mb: 3,
              }}
            >
              <Typography variant="h3" gutterBottom className="heading3">
                {"Download app for Exciting Deals"}
              </Typography>
              <Typography
                className="subtitle"
                variant="subtitle2"
                component="div"
                gutterBottom
              >
                {
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                }
              </Typography>
              <Grid container spacing={2} className="download-btn">
                <Grid item xs={4} sm={4} md={4}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      pr: 3,
                    }}
                  >
                    <img className="w-100" src={PlayStore} alt="" />
                  </Link>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                  <Link href="#" underline="none">
                    <img className="w-100" src={AppStore} alt="" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              sm={8}
              md={8}
              lg={5}
              order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
            >
              <Box className="app-screen">
                <img className="w-100" src={Appscreen} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AppDownload;
