import React from "react";
import "./index.scss";
import { ReactComponent as SVGicon1 } from "../../images/booking-icon.svg";
import { ReactComponent as SVGicon2 } from "../../images/food-for-free-icon.svg";
import { ReactComponent as SVGicon3 } from "../../images/home-delivery-icon.svg";
import { ReactComponent as LargeArrow } from "../../images/big-arrow.svg";
import UnderLine from "../../images/underline2.png";

// Material Ints
import { Container, Grid, Typography, Box } from "@mui/material";

function Services() {
  return (
    <>
      <Box className="services_sec">
        <Container>
          <Grid
            container
            spacing={{
              xs: 5,
              sm: 5,
              md: 5,
              lg: 30,
            }}
            sx={{
              pb: 20,
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom
                  className="heading3"
                  sx={{
                    m: 0,
                  }}
                >
                  {"Our Services"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Typography
                variant="subtitle1"
                gutterBottom
                className="subtitle"
                sx={{
                  m: 0,
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{
              xs: 10,
              sm: 10,
              md: 10,
              lg: 30,
            }}
            sx={{
              pb: 20,
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Grid
                container
                sx={{
                  alignItems: "center",
                  pb: 15,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <SVGicon1 />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
                >
                  <LargeArrow />
                </Grid>
                <Grid
                  className="column"
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  display={{ xs: "flex", sm: "flex", md: "flex", lg: "block" }}
                  sx={{
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    className="title underline line1"
                    sx={{
                      mb: 0,
                    }}
                  >
                    {"advanced table"}
                    <br />
                    {"booking"}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    component="div"
                    className="des"
                  >
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                    }
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                spacing={8}
                container
                sx={{
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  order={{ xs: 2, sm: 2, md: 2, lg: 0 }}
                  className="column"
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    className="title underline line2"
                    sx={{
                      mb: 0,
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    {"Food for Free"}
                    <br />
                    {"24/7"}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    className="des"
                  >
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                    }
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
                >
                  <LargeArrow className="revers" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                  className="column"
                >
                  <SVGicon2 />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              sx={{
                textAlign: "center",
              }}
            >
              <SVGicon3 />
              <Typography
                variant="h5"
                gutterBottom
                className="title text-blue"
                sx={{
                  mt: 5,
                  mb: 0,
                }}
              >
                {"free home delivery at your door steps"}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                className="des"
                sx={{
                  mb: 2,
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                }
              </Typography>
              <img src={UnderLine} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Services;
