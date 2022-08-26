import React from "react";
import "./index.scss";

// Material Ints
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

// Card Data
const explorefoodData = [
  {
    itemImg:
      "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661265523413.png",
    itemName: "Ham Sandwich",
    itemDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    itemPrice: "$10.50",
  },
  {
    itemImg:
      "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661343758352.png",
    itemName: "Ham Sandwich",
    itemDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    itemPrice: "$10.50",
  },
  {
    itemImg:
      "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661343806736.png",
    itemName: "Ham Sandwich",
    itemDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    itemPrice: "$10.50",
  },
  {
    itemImg:
      "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661343639772.png",
    itemName: "Ham Sandwich",
    itemDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    itemPrice: "$10.50",
  },
  {
    itemImg:
      "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661343697592.png",
    itemName: "Ham Sandwich",
    itemDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    itemPrice: "$10.50",
  },
  {
    itemImg:
      "https://tot-image-dev.s3.ap-south-1.amazonaws.com/dev/content/1661343831084.png",
    itemName: "Ham Sandwich",
    itemDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    itemPrice: "$10.50",
  },
];

function ExploreFoods() {
  return (
    <>
      <Box className="explore_sec">
        <Container>
          <Grid
            container
            sx={{
              mb: 8,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={5}>
              <Typography
                variant="h3"
                gutterBottom
                className="heading4"
                sx={{
                  mb: 4,
                  textAlign: "center",
                }}
              >
                {"Explore Our Foods"}
              </Typography>
              <Typography
                className="subtitle"
                variant="subtitle2"
                component="div"
                gutterBottom
                sx={{
                  textAlign: "center",
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
                }
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{
              xs: 3,
              sm: 6,
              md: 6,
              lg: 6,
            }}
            sx={{ mt: 1, mb: 1 }}
          >
            {explorefoodData.map((data, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <Card
                  className="itemCard"
                  sx={{ borderRadius: "13px", mb: 3, width: "100%" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={data.itemImg}
                      alt="green iguana"
                    />
                  </CardActionArea>
                  <CardContent
                    sx={{
                      p: 3,
                    }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 0, md: 2 }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={9} sm={9} md={9}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          className="name"
                          sx={{
                            mb: 0,
                          }}
                        >
                          {data.itemName}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          className="price"
                          sx={{
                            mb: 0,
                          }}
                        >
                          {data.itemPrice}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body2"
                      className="des"
                      sx={{
                        mt: 2,
                        mb: 2,
                      }}
                    >
                      {data.itemDes}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ExploreFoods;
