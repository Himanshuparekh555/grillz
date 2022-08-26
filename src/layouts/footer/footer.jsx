import React from "react";
import "./index.scss";

import { ReactComponent as ArrowButton } from "../../images/arrow.svg";
import { ReactComponent as FBicon } from "../../images/fb.svg";
import { ReactComponent as Linicon } from "../../images/lin.svg";
import { ReactComponent as Instaicon } from "../../images/insta.svg";

// Material Ints
import {
  Container,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
  InputBase,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

const Footer = ({}) => {
  const [email, setEmail] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (!email) {
      setEmailErrorText("Please enter email");
    } else {
      setEmailErrorText("");
    }
  };

  return (
    <footer>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography
              variant="h6"
              gutterBottom
              className="heading4"
              sx={{
                textAlign: "center",
                mb: 5,
              }}
            >
              {"Get notified about new amazing products"}
            </Typography>
            <Typography
              className="footer-des"
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{
                textAlign: "center",
                mb: 7,
              }}
            >
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since."
              }
            </Typography>
            <Paper
              className="newsletter_box"
              component="form"
              noValidate
              sx={{
                borderRadius: "100px",
                p: "10px 15px",
                m: "auto",
                display: "flex",
                alignItems: "center",
                width: 368,
              }}
            >
              <InputBase
                id="email"
                sx={{ ml: 1, flex: 1 }}
                placeholder="E-mail"
                inputProps={{ "aria-label": "E-mail" }}
                required
                value={email}
                error={!!emailErrorText}
                helperText={emailErrorText}
                onChange={(e) => setEmail(e.target.value)}
              />
              <IconButton
                onClick={onSubmit}
                className="IconButton"
                type="submit"
                sx={{ p: "0" }}
                aria-label="search"
              >
                <ArrowButton />
              </IconButton>
            </Paper>
            <List
              className="footer_links"
              sx={{
                mt: 4,
                mb: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  component="a"
                  href="#simple-list"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Product" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  component="a"
                  href="#simple-list"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Company" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  disableRipple
                  href="#simple-list"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Learn more" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  disableRipple
                  href="#simple-list"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Get in touch" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box
          className="copyright"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            pt: 5,
            pb: 5,
          }}
        >
          <List
            className="footer_links"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                component="a"
                href="#simple-list"
                sx={{
                  pl: 0,
                  pr: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <FBicon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                component="a"
                href="#simple-list"
                sx={{
                  pl: 0,
                  pr: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Linicon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                component="a"
                href="#simple-list"
                sx={{
                  pl: 0,
                  pr: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Instaicon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              mb: 0,
              ml: 5,
            }}
          >
            {"© 2022 Techverse World."}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
