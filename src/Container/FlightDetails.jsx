import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { flightDetails } from "../Components/Gallery/location";
import { CgAirplane } from "react-icons/cg";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import "./FlightDetails.css";
import moment from "moment";

import {
  Divider,
  Typography,
  Container,
  Paper,
  Box,
  Card,
  Button,
} from "@mui/material";
// import Logo from "../images/Logo.PNG";
import CartModal from "../Components/FlightDetails/CartModal/CartModal";
import BookingHeader from "../Components/FlightDetails/BookingHeader";
import FlightCard from "../Components/FlightDetails/FlightCard";
import FlightHeader from "../Components/FlightDetails/FlightHeader";

const FlightDetails = () => {
  const location = useLocation();
  const [selectedFlights, setSelectedFlights] = useState(false);
  const [origenFlights,setOriginFlights]=useState(true)
  const [destinationFlights,setDestinationFlights]=useState(false);

  const [bookingDetails, setBookingDetails] = useState();
  const [bookedOriginDetails, setBookedOrigenDetails] = useState();
  const [bookedDestDetails, setBookedDestDetails] = useState();
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setBookingDetails(location.state);
  }, [location]);
  // console.log(bookingDetails);
  if (bookingDetails && Array.isArray(bookingDetails.dates)) {
    var startingDate = moment(bookingDetails?.dates[0]).format("MMM Do YY");
    // console.log(startingDate);
    var endingDate = moment(bookingDetails?.dates[1]).format("MMM Do YY");
  } else {
    var date = moment(bookingDetails?.dates).format("MMM Do YY");
  }
  const FindElem = flightDetails.find((el) => {
    if (
      el.from == bookingDetails?.origenId &&
      el.to == bookingDetails?.destinationId
    ) {
      return el;
    }
  });
  const FindElem2 = flightDetails.find((el2) => {
    if (
      el2.to == bookingDetails?.origenId &&
      el2.from == bookingDetails?.destinationId
    ) {
      return el2;
    }
  });
  // console.log("dest to ori",FindElem2)
  if (Array.isArray(bookingDetails?.dates) === true) {
    if (FindElem?.days1.includes(bookingDetails.dates[0].getDay()) === true) {
      var Price = FindElem?.price1;
    } else {
      var Price = FindElem?.price2;
    }
  } else {
    if (FindElem?.days1.includes(bookingDetails?.dates.getDay()) === true) {
      var Price = FindElem?.price1;
    } else {
      var Price = FindElem?.price2;
    }
  }

  if (Array.isArray(bookingDetails?.dates) === true) {
    if (FindElem2?.days1.includes(bookingDetails.dates[1].getDay()) === true) {
      var Price2 = FindElem2?.price1;
    } else {
      var Price2 = FindElem2?.price2;
    }
  }

  const onOrigenSubmit = (data) => {
    setBookedOrigenDetails(data);
    setOriginFlights(false)
    if (Array.isArray(bookingDetails?.dates)) {
      setDestinationFlights(true);
    } else {
      setShowCart(true);
    }
  };
  const onDestSubmit = (data) => {
    // setDestinationFlights(true)
    setSelectedFlights(true)
    setBookedDestDetails(data);

    setShowCart(true);
  };

  var origenTotal = parseFloat(Price * bookingDetails?.passengers).toFixed(3);
  var destinationTotal = parseFloat(
    Price2 * bookingDetails?.passengers
  ).toFixed(3);
  // }
  if (Array.isArray(bookingDetails?.dates) === true) {
    var totalAmount = (
      parseFloat(origenTotal) + parseFloat(destinationTotal)
    ).toFixed(3);
  } else {
    var totalAmount = origenTotal;
  }


  const cartSubmit=()=>{
    const data = {
      bookedOriginDetails,
      bookedDestDetails,
      bookingDetails,
      totalAmount

    }
    navigate("/contact", { state: data });
  }
  return (
    <Box className="main">
      <Box className="bg_cover">
        <BookingHeader bookingDetails={bookingDetails} />
      </Box>
      <Box className="flight_details_main">
        <Container maxWidth="lg">
          {origenFlights === true && (
            <FlightHeader
              origenName={bookingDetails?.origenName}
              destinationName={bookingDetails?.destinationName}
            />
            // <Paper className="selected_flight">
            //   <Box
            //     sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            //   >
            //     <Box sx={{ display: "flex", alignItems: "center" }}>
            //       <GiAirplaneDeparture />
            //       <Typography variant="h6">
            //         SELECCIONAR VUELO DE SALIDA
            //       </Typography>
            //     </Box>
            //     <Box className="selected_flight_details">
            //       <Typography sx={{ fontSize: "1.9vmax" }}>
            //         {bookingDetails?.origenName}
            //       </Typography>
            //       <CgAirplane style={{ fontSize: "25px", color: "#ff8200" }} />
            //       <Typography sx={{ fontSize: "1.9vmax" }}>
            //         {bookingDetails?.destinationName}
            //       </Typography>
            //     </Box>
            //   </Box>
            // </Paper>
          )}
          {destinationFlights === true && (
            <FlightHeader
              origenName={bookingDetails?.destinationName}
              destinationName={bookingDetails?.origenName}
            />
            // <Paper className="selected_flight">
            //   <Box
            //     sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            //   >
            //     <Box sx={{ display: "flex", alignItems: "center" }}>
            //       <GiAirplaneDeparture />
            //       <Typography variant="h6">
            //         SELECCIONAR VUELO DE SALIDA
            //       </Typography>
            //     </Box>
            //     <Box className="selected_flight_details">
            //       <Typography sx={{ fontSize: "1.9vmax" }}>
            //         {bookingDetails?.destinationName}
            //       </Typography>
            //       <CgAirplane style={{ fontSize: "25px", color: "#ff8200" }} />
            //       <Typography sx={{ fontSize: "1.9vmax" }}>
            //         {bookingDetails?.origenName}
            //       </Typography>
            //     </Box>
            //   </Box>
            // </Paper>
          )}
          {origenFlights === true && (
            <Container maxWidth="lg">
              {FindElem?.flights.map((el) => {
                return (
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <FlightCard
                      el={el}
                      bookingDetails={bookingDetails}
                      date1={startingDate}
                      date={date}
                      onSubmit={onOrigenSubmit}
                      total={origenTotal}
                      destination={false}
                    />
                  </div>
                );
              })}
            </Container>
          )}
          {destinationFlights === true && Array.isArray(bookingDetails?.dates) && (
            <Container maxWidth="lg">
              {FindElem2?.flights.map((el2) => {
                return (
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <FlightCard
                      el={el2}
                      bookingDetails={bookingDetails}
                      date1={endingDate}
                      date={date}
                      onSubmit={onDestSubmit}
                      total={destinationTotal}
                      destination={true}
                    />
                  </div>
                );
              })}
            </Container>
          )}
        </Container>
      </Box>
      {showCart && (
        <CartModal
          items={bookingDetails?.passengers}
          totalAmount={totalAmount}
          cartSubmit={cartSubmit}
          buttonText="Continuar"
        />
      )}
    </Box>
  );
};

export default FlightDetails;
