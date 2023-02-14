import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { Container, Col, Row } from "react-bootstrap";
import "./Gallery.css";
import Slider1 from "../../images/slider1.jpg";
import Slider2 from "../../images/slider2.jpg";
import Slider3 from "../../images/slider3.jpg";
import Tools from "../../images/percent.png";
import Umrella from "../../images/umrella.png";
import Tick from "../../images/tick.png";
import Target from "../../images/target.png";
import Left from "../../images/left.png";
import Right from "../../images/right.png";
import CalendarImg from "../../images/calendar.png";
import User from "../../images/user.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiOutlineMinus } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";
import dayjs from "dayjs";
import MultiCalendar from "./Calendar/MultiCalendar";
import Passengers from "./passengers/Passengers";
import { fromLocation, to } from "./location";

import { MuiDatePicker, MuiDateRangePicker, MuiSingleDatePicker } from "./MuiDateRangePicker";
const locale = "fr-CA";

const Gallery = () => {
  const images = [
    {
      original: Slider1,
      thumbnail: Slider1,
    },
    {
      original: Slider2,
      thumbnail: Slider2,
    },
    {
      original: Slider3,
      thumbnail: Slider3,
    },
  ];
  const [activeTab, setActiveTab] = useState(1);
  const [activeOrigin, setActiveOrigin] = useState(false);
  const [originId, setOriginId] = useState();
  const [destinationId, setDestinationId] = useState();
  const [activeDestination, setActiveDestination] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [activePassenger, setActivePassenger] = useState(false);
  const [toLocation, setToLocation] = React.useState([]);
  const [autoOk, setAutoOk] = useState(false);
  const [value, setValue] = useState([null, null]);
  const [passengers, setPassengers] = useState(0)
  const onClickHanlder = (id) => {
    setActiveOrigin(false);
    setOriginId(id);
    setActiveDestination(true);
    const findCity = to.find((el) => el.id === id);
    setToLocation(findCity.show);
    console.log(findCity);
  };
  const destinationHandler = (id) => {
    setDestinationId(id);
    setActiveDestination(false);
    setAutoOk(true)
  };
  var current = new Date();
  if (current.getMonth() === 11) {
    var nextMonth = new Date(current.getFullYear() + 1, 0, 1);
  } else {
    var nextMonth = new Date(current.getFullYear(), current.getMonth() + 1, 1);
  }
  const [startDate, setStartDate] = useState(current);
  const [endDate, setEndDate] = useState(nextMonth);
  const onMenuSelect = () => {
    setActiveOrigin(!activeOrigin);
    setActiveCalendar(false);
    setActivePassenger(false);
  };
  const onCalendarSelect = () => {
    setActiveCalendar(!activeCalendar);
    setActiveOrigin(false);
    setActivePassenger(false);
  };
  const onPassengerSelect = () => {
    setActivePassenger(!activePassenger);
    setActiveOrigin(false);
    setActiveCalendar(false);
  };

  return (
    <div className="main_gallery_container p-0">
      <Container fluid>
        <Row>
          <Col md={12} className="p-0">
            <div style={{ position: "relative" }}>
              <ImageGallery
                autoPlay={true}
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            </div>
            <div className="formContainer">
              <form className="filterForm">
                <div>
                  <div style={{ display: "flex" }}>
                    <label
                      className={`form_tab mr-2 ${
                        activeTab === 1 ? "tab_active" : ""
                      }`}
                      onClick={() => setActiveTab(1)}
                    >
                      Viaje de iday vuelta
                    </label>
                    <label
                      className={`form_tab ${
                        activeTab === 2 ? "tab_active" : ""
                      }`}
                      onClick={() => setActiveTab(2)}
                    >
                      {" "}
                      Solo ida
                    </label>
                  </div>

                  <div className="d-md-flex">
                    <div className="row " style={{ position: "relative" }}>
                      <div className="from_main">
                        <div className="from">
                          <h2 className="from_heading">Origen</h2>
                          <div className="from_input" onClick={onMenuSelect}>
                            <img
                              src={Target}
                              style={{ width: "15px", height: "15px" }}
                            />
                            <input
                              type="text"
                              className="from_input"
                              placeholder="Seleccionar aeropuerto"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="from_main">
                        <div className="from">
                          <h2 className="from_heading text-right">Destino</h2>
                          <div className="from_input" onClick={onMenuSelect}>
                            <input
                              type="text"
                              className="from_input text-right"
                              placeholder="Seleccionar aeropuerto"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>

                      <button className="left_right_btn">
                        <img
                          src={Left}
                          style={{
                            width: "16px",
                            paddingRight: "2px",

                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                        <img
                          src={Right}
                          style={{
                            width: "16px",
                            paddingRight: "2px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                      </button>
                    </div>

                    <div className="calendar_container">
                      <div className="calendar">
                        {
                          activeTab === 1 &&
                        <MuiDateRangePicker 
                        originId={originId} destinationId={destinationId} autoOk={autoOk} setAutoOk={setAutoOk}/>
                      }
                        {
                          activeTab === 2 &&(
                            <div className="w-100">
                            <MuiDatePicker
                            originId={originId} destinationId={destinationId}
                             sx={{width:"100%"}}/>
                          </div>)
                        }
                      </div>
                    </div>

                    <div className="passenger_container">
                      <div className="passenger" onClick={onPassengerSelect}>
                        <div className="passenger_label">
                          <span
                            style={{ color: "#b2b2b2", fontSize: ".75rem" }}
                          >
                            Pasajeros
                          </span>
                          <h5 className="m-0 passenger_count">
                            {passengers} <span>Pasajero(s)</span>
                          </h5>
                        </div>
                        <div className="passenger_icon">
                          <img
                            src={User}
                            style={{ width: "18px", height: "18px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {activeOrigin && (
                    <div className="d-flex w-100 justify-content-sm-center justify-content-md-start">
                      <div className="select_component" id="select_from">
                        <ul style={{ listStyle: "none" }} className="p-0">
                          {fromLocation.map((el) => (
                            <div>
                              {el.category === "B" ? (
                                <>
                                  <li
                                    style={{
                                      backgroundColor: "#ff8200",
                                      color: "white",
                                    }}
                                    className="pl-2 my-0 py-0"
                                  >
                                    <h6 className="m-0">B</h6>
                                  </li>
                                  <li
                                    className="px-3 py-2 select_from"
                                    onClick={() => onClickHanlder(el.id)}
                                  >
                                    <div>
                                      <h6 className="selectHeading">
                                        {el.name}
                                      </h6>
                                      <p
                                        className="select_text"
                                        style={{
                                          lineHeight: 0,
                                          fontSize: "0.75rem",
                                        }}
                                      >
                                        {el.state}
                                      </p>
                                      <p
                                        className="select_text"
                                        style={{
                                          lineHeight: 0,
                                          fontSize: "0.75rem",
                                        }}
                                      >
                                        {el.area}
                                      </p>
                                    </div>
                                  </li>
                                </>
                              ) : null}
                              {el.category === "C" ? (
                                <>
                                  <li
                                    style={{
                                      backgroundColor: "#ff8200",
                                      color: "white",
                                    }}
                                    className="pl-2 my-0 py-0"
                                  >
                                    <h6 className="m-0">C</h6>
                                  </li>
                                  <li
                                    className="px-3 py-2 select_from"
                                    onClick={() => onClickHanlder(el.id)}
                                  >
                                    <div>
                                      <h6 className="selectHeading">
                                        {el.name}
                                      </h6>
                                      <p
                                        className="select_text"
                                        style={{
                                          lineHeight: 0,
                                          fontSize: "0.75rem",
                                        }}
                                      >
                                        {el.state}
                                      </p>
                                      <p
                                        className="select_text"
                                        style={{
                                          lineHeight: 0,
                                          fontSize: "0.75rem",
                                        }}
                                      >
                                        {el.area}
                                      </p>
                                    </div>
                                  </li>
                                </>
                              ) : null}
                              {el.category === "M" ? (
                                <>
                                  <li
                                    style={{
                                      backgroundColor: "#ff8200",
                                      color: "white",
                                    }}
                                    className="pl-2 my-0 py-0"
                                  >
                                    <h6 className="m-0">M</h6>
                                  </li>
                                  <li
                                    className="px-3 py-2 select_from"
                                    onClick={() => onClickHanlder(el.id)}
                                  >
                                    <div>
                                      <h6 className="selectHeading">
                                        {el.name}
                                      </h6>
                                      <p
                                        className="select_text"
                                        style={{
                                          lineHeight: 0,
                                          fontSize: "0.75rem",
                                        }}
                                      >
                                        {el.state}
                                      </p>
                                      <p
                                        className="select_text"
                                        style={{
                                          lineHeight: 0,
                                          fontSize: "0.75rem",
                                        }}
                                      >
                                        {el.area}
                                      </p>
                                    </div>
                                  </li>
                                </>
                              ) : null}
                              <>
                                {el.category === "P" ? (
                                  <>
                                    <li
                                      style={{
                                        backgroundColor: "#ff8200",
                                        color: "white",
                                      }}
                                      className="pl-2 my-0 py-0"
                                    >
                                      <h6 className="m-0">P</h6>
                                    </li>
                                    <li
                                      className="px-3 py-2 select_from"
                                      onClick={() => onClickHanlder(el.id)}
                                    >
                                      <div>
                                        <h6 className="selectHeading">
                                          {el.name}
                                        </h6>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.state}
                                        </p>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.area}
                                        </p>
                                      </div>
                                    </li>
                                  </>
                                ) : null}
                              </>
                              <>
                                {el.category === "S" ? (
                                  <>
                                    <li
                                      style={{
                                        backgroundColor: "#ff8200",
                                        color: "white",
                                      }}
                                      className="pl-2 my-0 py-0"
                                    >
                                      <h6 className="m-0">S</h6>
                                    </li>
                                    <li
                                      className="px-3 py-2 select_from"
                                      onClick={() => onClickHanlder(el.id)}
                                    >
                                      <div>
                                        <h6 className="selectHeading">
                                          {el.name}
                                        </h6>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.state}
                                        </p>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.area}
                                        </p>
                                      </div>
                                    </li>
                                  </>
                                ) : null}
                              </>
                            </div>
                          ))}
                        </ul>

                        {/* /adsdadasdsadsadsa */}
                      </div>
                    </div>
                  )}
                  {activeDestination && (
                    <div className="d-flex w-100 justify-content-sm-center justify-content-md-start">
                      <div className="select_component" id="select_from">
                        <ul style={{ listStyle: "none" }} className="p-0">
                          {toLocation.length > 0 &&
                            toLocation.map((el) => (
                              <div>
                                {el.category === "B" ? (
                                  <>
                                    <li
                                      style={{
                                        backgroundColor: "#ff8200",
                                        color: "white",
                                      }}
                                      className="pl-2 my-0 py-0"
                                    >
                                      <h6 className="m-0">B</h6>
                                    </li>
                                    <li className="px-3 py-2 select_from">
                                      <div>
                                        <h6 className="selectHeading">
                                          {el.name}
                                        </h6>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.state}
                                        </p>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.area}
                                        </p>
                                      </div>
                                    </li>
                                  </>
                                ) : null}
                                {el.category === "C" ? (
                                  <>
                                    <li
                                      style={{
                                        backgroundColor: "#ff8200",
                                        color: "white",
                                      }}
                                      className="pl-2 my-0 py-0"
                                    >
                                      <h6 className="m-0">C</h6>
                                    </li>
                                    <li
                                      className="px-3 py-2 select_from"
                                      onClick={() => destinationHandler(el.id)}
                                    >
                                      <div>
                                        <h6 className="selectHeading">
                                          {el.name}
                                        </h6>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.state}
                                        </p>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.area}
                                        </p>
                                      </div>
                                    </li>
                                  </>
                                ) : null}
                                {el.category === "M" ? (
                                  <>
                                    <li
                                      style={{
                                        backgroundColor: "#ff8200",
                                        color: "white",
                                      }}
                                      className="pl-2 my-0 py-0"
                                    >
                                      <h6 className="m-0">M</h6>
                                    </li>
                                    <li className="px-3 py-2 select_from">
                                      <div>
                                        <h6 className="selectHeading">
                                          {el.name}
                                        </h6>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.state}
                                        </p>
                                        <p
                                          className="select_text"
                                          style={{
                                            lineHeight: 0,
                                            fontSize: "0.75rem",
                                          }}
                                        >
                                          {el.area}
                                        </p>
                                      </div>
                                    </li>
                                  </>
                                ) : null}
                                <>
                                  {el.category === "P" ? (
                                    <>
                                      <li
                                        style={{
                                          backgroundColor: "#ff8200",
                                          color: "white",
                                        }}
                                        className="pl-2 my-0 py-0"
                                      >
                                        <h6 className="m-0">P</h6>
                                      </li>
                                      <li className="px-3 py-2 select_from">
                                        <div>
                                          <h6 className="selectHeading">
                                            {el.name}
                                          </h6>
                                          <p
                                            className="select_text"
                                            style={{
                                              lineHeight: 0,
                                              fontSize: "0.75rem",
                                            }}
                                          >
                                            {el.state}
                                          </p>
                                          <p
                                            className="select_text"
                                            style={{
                                              lineHeight: 0,
                                              fontSize: "0.75rem",
                                            }}
                                          >
                                            {el.area}
                                          </p>
                                        </div>
                                      </li>
                                    </>
                                  ) : null}
                                </>
                                <>
                                  {el.category === "S" ? (
                                    <>
                                      <li
                                        style={{
                                          backgroundColor: "#ff8200",
                                          color: "white",
                                        }}
                                        className="pl-2 my-0 py-0"
                                      >
                                        <h6 className="m-0">S</h6>
                                      </li>
                                      <li className="px-3 py-2 select_from">
                                        <div>
                                          <h6 className="selectHeading">
                                            {el.name}
                                          </h6>
                                          <p
                                            className="select_text"
                                            style={{
                                              lineHeight: 0,
                                              fontSize: "0.75rem",
                                            }}
                                          >
                                            {el.state}
                                          </p>
                                          <p
                                            className="select_text"
                                            style={{
                                              lineHeight: 0,
                                              fontSize: "0.75rem",
                                            }}
                                          >
                                            {el.area}
                                          </p>
                                        </div>
                                      </li>
                                    </>
                                  ) : null}
                                </>
                              </div>
                            ))}
                        </ul>

                        {/* /adsdadasdsadsadsa */}
                      </div>
                    </div>
                  )}
                  {activeCalendar && (
                    <MultiCalendar
                      startDate={startDate}
                      setStartDate={setStartDate}
                      endDate={endDate}
                      setEndDate={setEndDate}
                      originId={originId}
                      destinationId={destinationId}
                    />
                  )}
                  {activePassenger && <Passengers passengers={passengers} setPassengers={setPassengers}/>}

                  <div className="mt-3" style={{ display: "Flex" }}>
                    <label className={`form_bottom_tab mr-2`}>
                      <span>
                        <img src={Tools} className="tab_icon" />
                      </span>
                      Código promocional
                    </label>
                    <label className={`form_bottom_tab mr-2`}>
                      <span>
                        <img src={Umrella} className="tab_icon" />
                      </span>
                      Tiquete + Hotel
                    </label>
                    <label className={`form_bottom_tab`}>
                      <span>
                        <img src={Tick} className="tab_icon" />
                      </span>
                      Check in
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
