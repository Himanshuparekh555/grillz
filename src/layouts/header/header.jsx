import React, { useState } from "react";
import "./index.scss";

import logo from "../../images/logo.svg";
import userProfile from "../../images/userpic.png";

// Material Ints
import {
  Container,
  Grid,
  Box,
  Link,
  Menu,
  MenuList,
  MenuItem,
  Avatar,
  Badge,
  Button,
  styled,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#3FA2F7",
    color: "#44b700",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));

const Header = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // mobile sidebar toggleclass
  const [isActive, setActive] = useState("false");
  // const [isActiveMap, setActiveMap] = useState("false");

  const MenuToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header>
        <Container>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={9} sm={9} md={9}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  sm={3}
                  md={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    className="nav-drawer"
                    onClick={MenuToggleClass}
                    sx={{ mr: 1 }}
                    display={{
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                    }}
                  >
                    <MenuSharpIcon />
                  </Box>
                  <Link href="/" underline="none">
                    <img className="logo" src={logo} alt="Logo" />
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={9}
                  md={9}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box className={isActive ? "nav" : "nav active"}>
                    <Box
                      onClick={MenuToggleClass}
                      display={{
                        xs: "block",
                        sm: "block",
                        md: "block",
                        lg: "none",
                      }}
                      sx={{ textAlign: "right", pt: 2, pr: 2 }}
                    >
                      <CloseIcon />
                    </Box>
                    <MenuList sx={{ p: 0 }}>
                      <MenuItem disableRipple sx={{ pl: 4, pr: 4 }}>
                        {"Menu One"}
                      </MenuItem>
                      <MenuItem disableRipple sx={{ pl: 4, pr: 4 }}>
                        {"Menu Two"}
                      </MenuItem>
                      <MenuItem disableRipple sx={{ pl: 4, pr: 4 }}>
                        {"Menu Three"}
                      </MenuItem>
                      <MenuItem disableRipple sx={{ pl: 4, pr: 4 }}>
                        {"Menu Four"}
                      </MenuItem>
                    </MenuList>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Button
                  sx={{ p: 0 }}
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  disableRipple
                  className="user_profile"
                  style={{ textTransform: "none" }}
                >
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="Remy Sharp" src={userProfile} />
                  </StyledBadge>
                  <Box
                    sx={{
                      ml: 2,
                      display: { xs: "none", md: "none", lg: "flex" },
                    }}
                  >
                    {"User"} <ArrowDropDownIcon />
                  </Box>
                </Button>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>{"My Profile"}</MenuItem>
                <MenuItem>{"My Order"}</MenuItem>
                <MenuItem>{"Log Out"}</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Container>
      </header>
      <Box
        className={isActive ? "overlay" : "overlay active"}
        onClick={MenuToggleClass}
      ></Box>
    </>
  );
};

export default Header;
