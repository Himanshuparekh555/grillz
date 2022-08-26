import React from "react";
import "./index.scss";

// Material Ints
import {
  Container,
  Grid,
  Typography,
  Box,
  Select,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
// Autocomplete Data
const AdvanceSearch = [
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
];

// Guest Data
const names = ["1 People", "2 People", "3 People", "4 People", "5 People"];

function AdvancedBooking() {
  // Date & Time Picker
  const [Datevalue, setDateValue] = React.useState(null);
  const [Timevalue, setTimeValue] = React.useState(new Date(""));

  // Select Guests
  const [guest, setGuest] = React.useState("");
  const handleChange = (event) => {
    setGuest(event.target.value);
  };

  return (
    <>
      <Box className="booking_sec">
        <Container>
          <Box
            className="booking_block"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={10} lg={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="heading2"
                  sx={{
                    pt: 4,
                    mb: 8,
                    textAlign: "center",
                  }}
                >
                  {"advanced booking"}
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
                    options={AdvanceSearch.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        style={{ height: "100%" }}
                        {...params}
                        placeholder="search restaurant"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                  <Button
                    variant="contained"
                    className="primary-btn"
                    sx={{ boxShadow: 0 }}
                  >
                    {"GO"}
                  </Button>
                </Box>
                <Grid
                  container
                  sx={{
                    pt: 8,
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="datetimePicker"
                >
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <label>
                      {"Date"}
                      <ArrowDropDownIcon sx={{ fontSize: 25 }} />
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        value={Datevalue}
                        views={["year", "month", "day"]}
                        format="DD-MM-YYYY"
                        onChange={(newValue) => {
                          setDateValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Enter date" />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <label>
                      {"Time"}
                      <ArrowDropDownIcon sx={{ fontSize: 25 }} />
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileTimePicker
                        value={Timevalue}
                        onChange={(newValue) => {
                          setTimeValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Enter Time" />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <label>
                      {"Guests"}
                      <ArrowDropDownIcon sx={{ fontSize: 25 }} />
                    </label>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={guest}
                        label="Age"
                        onChange={handleChange}
                        placeholder="Enter Guest"
                        disableUnderline
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AdvancedBooking;
