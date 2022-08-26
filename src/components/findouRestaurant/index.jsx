import React from "react";
import "./index.scss";
import { ReactComponent as MapIcon } from "../../images/map.svg";
import { ReactComponent as SeemoreIcon } from "../../images/seemore-icon.svg";

// Material Ints
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  Link,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

// Card Data
const cardData = [
  {
    img: "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661229386152.png",
    name: "Fire Water",
    des: "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
    city: "Mumbai City",
  },
  {
    img: "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661229424676.png",
    name: "The Wonton",
    des: "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
    city: "Indore City",
  },
];

const findouRestaurant = ({}) => {
  return (
    <>
      <section className="findout_sec">
        <Container>
          <Grid
            container
            spacing={4}
            sx={{
              pb: 20,
            }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom
                  className="heading1"
                  sx={{
                    m: 0,
                    pl: 4,
                  }}
                >
                  {"some top restaurant for dining out or in!"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="subtitle1" gutterBottom className="subtitle">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Grid
          container
          spacing={4}
          sx={{
            pb: 4,
            mb: 10,
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Box className="items_block">
              <Grid container spacing={{ xs: 3, md: 8 }}>
                {cardData.map((card, index) => (
                  <Grid item xs={12} sm={6} md={6}>
                    <Card
                      key={index}
                      className="item_card"
                      sx={{ borderRadius: "20px" }}
                    >
                      <CardMedia
                        component="img"
                        src={card.img}
                        alt="Product Image"
                      />
                      <CardContent
                        className="content"
                        sx={{
                          borderRadius: "20px",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          className="name"
                          sx={{
                            mb: 0,
                          }}
                        >
                          {card.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="des"
                        >
                          {card.des}
                        </Typography>
                        <CardActions
                          sx={{
                            p: 0,
                            mt: 3,
                          }}
                        >
                          <Grid
                            container
                            sx={{
                              display: "flex",
                              alignItems: "start",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid
                              item
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <MapIcon />
                              <Box
                                sx={{
                                  pl: 1,
                                }}
                              >
                                {card.city}
                              </Box>
                            </Grid>
                            <Grid item>
                              <Button
                                variant="contained"
                                className="secondary-btn"
                                style={{ textTransform: "none" }}
                                sx={{ boxShadow: 0 }}
                              >
                                {"Book Now"}
                                <EastRoundedIcon
                                  sx={{
                                    pl: 1,
                                  }}
                                />
                              </Button>
                            </Grid>
                          </Grid>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
              mb: 4,
            }}
          >
            <Link
              underline="none"
              href="#"
              className="more-btn"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SeemoreIcon />
              <Box
                sx={{
                  pt: 3,
                }}
              >
                {"see more"}
              </Box>
            </Link>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default findouRestaurant;
