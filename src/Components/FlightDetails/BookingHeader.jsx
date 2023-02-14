import { Divider, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import moment from 'moment';
import React from 'react'
import { CgAirplane } from 'react-icons/cg';
import Logo from "../../images/Logo.PNG"

const BookingHeader = ({bookingDetails}) => {
    if (bookingDetails && Array.isArray(bookingDetails.dates)) {
        var startingDate = moment(bookingDetails?.dates[0]).format("MMM Do YY");
        // console.log(startingDate);
        var endingDate = moment(bookingDetails?.dates[1]).format("MMM Do YY");
      } else {
        var date = moment(bookingDetails?.dates).format("MMM Do YY");
      }
  return (
    <Container maxWidth="lg">
          <Paper className="details_header"  data-aos="fade-down" data-aos-duration="300">
          <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
               <img className="details_logo" src={Logo} /> 
               <Box className="header-details">
                <Typography variant="h5" className="mx-1">
                  Cambiar Busqueda
                </Typography>
                {bookingDetails && (
                  <Box
                    sx={{
                      display: "flex",
                      color: "white",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography className="mx-1">
                      {bookingDetails.origenCode}
                    </Typography>
                    <CgAirplane />
                    <Typography className="mx-1">
                      {" "}
                      {bookingDetails.destinationCode}
                    </Typography>
                    <Divider
                      orientation="vertical"
                      sx={{ border: "1px solid white", height: "20px" }}
                    />
                    {Array.isArray(bookingDetails.dates) ? (
                      <>
                        <Typography className="mx-1">{startingDate}</Typography>
                        <Divider
                          orientation="vertical"
                          sx={{ border: "1px solid white", height: "20px" }}
                        />

                        <Typography className="mx-1">{endingDate}</Typography>
                        <Divider
                          orientation="vertical"
                          sx={{ border: "1px solid white", height: "20px" }}
                        />
                      </>
                    ) : (
                      <>
                        <Typography className="mx-1">{date}</Typography>
                        <Divider
                          orientation="vertical"
                          sx={{ border: "1px solid white", height: "20px" }}
                        />
                      </>
                    )}
                    <Typography className="mx-1">
                      {bookingDetails.passengers} Pasajero(s)
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            </Paper>
    </Container>
  )
}

export default BookingHeader