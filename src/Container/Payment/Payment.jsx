import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./payment.css";
import React, { useEffect, useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import {
  BsFillCreditCard2FrontFill,
  BsCalendar2EventFill,
} from "react-icons/bs";
import { MdVpnKey } from "react-icons/md";
import creditCard1 from "../../images/creditCard1.png";
import creditCard2 from "../../images/creditCard2.png";
import CartModal from "../../Components/FlightDetails/CartModal/CartModal";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingsState } from "../../Context/BookingDetailsProvider";
const Payment = () => {
  const [allDetails, setAllDetails] = useState();
  const navigate = useNavigate();
  const { details } = BookingsState();
  const location = useLocation();
  useEffect(() => {
    setAllDetails(location.state);
    // if (details.length === 0) navigate("/");
  }, [location, details]);
//   console.log(allDetails);
  console.log(details);
  return (
    <Box
      sx={{
        backgroundColor: "#f5f8fb",

        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: { xs: "100%", md: "85%" },
          my: 4,
          p: { xs: 1, md: 3 },
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Typography variant="h3" className="text-center my-2">
          PAYMENT DETAILS
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6} className="userDetails">
            <Box sx={{ mb: 2 }}>
              <label>Full Name</label>
              <TextField placeholder="Enter Name" />
            </Box>
            <Box sx={{ mb: 2 }}>
              <label>Email</label>
              <TextField placeholder="Enter Email" />
            </Box>
            <Box sx={{ mb: 2 }}>
              <label>Address</label>
              <TextField placeholder="Enter Address" />
            </Box>
            <Box sx={{ mb: 2 }}>
              <label>City</label>
              <TextField placeholder="Enter City" />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "47%" }, mb: 2 }}>
                <label>State</label>
                <TextField
                  error
                  placeholder="Enter State"
                  helperText="* This field is required"
                />
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "47%" }, mb: 2 }}>
                <label>Zip Code</label>
                <TextField placeholder="Enter ZipCode" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ margin: "0 2vmax" }}>
              <h3>PAYMENT</h3>
              Accepted Card <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <img src={creditCard1} width="130" height="45" />
                <img src={creditCard2} width="60" height="45" />
              </div>
              <br />
            </div>
            <div className="paymentContainer">
              <div className="paymentForm">
                <div>
                  <FormControl
                    fullWidth
                    sx={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      color: "lightgrey",

                      my: 2,
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "lightgrey" }}
                    >
                      Select a Payment Method
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      fullWidth
                      variant="outlined"
                      label="Select a Payment Method"
                      //   onChange={handleChange}
                    >
                      <MenuItem value="Debito">Debito</MenuItem>
                      <MenuItem value="Credito">Credito</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <label>Credit Card Number</label>
                  <div>
                    <BsFillCreditCard2FrontFill />
                    <CardNumberElement className="paymentInput" />
                  </div>
                </div>
                <div>
                  <label>Expiry Date</label>
                  <div>
                    <BsCalendar2EventFill />
                    <CardExpiryElement className="paymentInput" />
                  </div>
                </div>
                <div>
                  <label>CVC</label>
                  <div>
                    <MdVpnKey />
                    <CardCvcElement className="paymentInput" />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <CartModal
        items={allDetails?.bookingDetails?.passengers}
        totalAmount={allDetails?.totalAmount}
        buttonText="Continuar"
        // cartSubmit={handleSubmit}
        Submit="Submit"
      />
    </Box>
  );
};

export default Payment;
