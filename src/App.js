import React, { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Cards from "./Components/Cards/Cards";
import Gallery from "./Components/Gallery/Gallery";
import Navbar from "./Components/Navbar/Navbar";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import Gallery2 from "./Components/Gallery/Gallery2";
import FlightDetails from "./Container/FlightDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Container/Home";
import BookingForm from "./Container/BookingForm/BookingForm";
import { Slide, ToastContainer } from "react-toastify";
import Payment from "./Container/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate } from "react-router-dom";
function App() {
  var stripePromise= loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  useEffect(() => {
   }, []);
  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          transition={Slide}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <BrowserRouter>
          <Routes>
            <Route exact path="/details" element={<FlightDetails />} />
            <Route exact path="/contact" element={<BookingForm />} />
            {/* <Elements> */}
            <Route path="/payment" element={<Elements stripe={stripePromise}><Payment /></Elements> } />
            {/* </Elements> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;
