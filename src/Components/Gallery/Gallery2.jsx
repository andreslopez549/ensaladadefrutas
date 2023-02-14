import React, { useEffect, useState } from "react";
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
import { fromLocation, to } from "./location";
import { MuiDateRangePicker } from "./MuiDateRangePicker";
import { MuiDatePicker, MuiDateRangePicker2 } from "./MuiDateRangePicker2";
import User from "../../images/user.png";
import Passengers from "./passengers/Passengers";
import { FaPaperPlane } from "react-icons/fa";
import FlightDetails from "../../Container/FlightDetails";
import { useNavigate } from "react-router-dom";
const Gallery2 = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [selectedOrigen, setSelectedOrigen] = useState({
    id: null,
    Name: "Origen",
    fullName: "",
  });
  const [showDestinations, setShowDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({
    id: null,
    Name: "Destino",
    fullName: "",
  });
  const [origen, setOrigen] = useState(false);
  const [destination, setDestination] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [passengersTab, setPassengersTab] = useState(false);
  const [value, setValue] = useState([null, null]);
  const [selectedDate, setSelectedDate] = useState();
  const [adulto, setAdulto] = useState(1);
  const [ninos, setNinos] = useState(0);
  const [bebe, setBebe] = useState(0);
  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      way: activeTab,
      origenId: selectedOrigen.id,
      origenCode: selectedOrigen.Name,
      origenName: selectedOrigen.fullName,
      destinationId: selectedDestination.id,
      destinationCode: selectedDestination.Name,
      destinationName: selectedDestination.fullName,
      dates: activeTab === 1 ? value : selectedDate,
      passengers,
      adulto,
      bebe,
      ninos,
    };
    // console.log(booking);
    navigate("/details", { state: data });
  };
  //   console.log(Object.keys(booking));
  //   console.log(booking);

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
  const onMenuSelect = () => {
    setOrigen(!origen);
    setAutoOpen(false);
    setPassengersTab(false);
  };
  const onClickHanlder = (id, name) => {
    setOrigen(false);
    const arr = name.split(" ");
    const Name = arr[arr.length - 1];
    setSelectedOrigen({ id, Name, fullName: name });
    setDestination(true);
    const findCity = to.find((el) => el.id === id);
    setShowDestinations(findCity.show);
  };
  const destinationHandler = (id, name) => {
    setDestination(false);
    const arr = name.split(" ");
    const Name = arr[arr.length - 1];
    setSelectedDestination({ id, Name, fullName: name });
    setAutoOpen(true);
  };
  useEffect(() => {
    // console.log(booking);
  }, [autoOpen]);
  const OnTabSWitch = (tab) => {
    setActiveTab(tab);
    setAutoOpen(false);
    setSelectedDestination({
      id: null,
      Name: "Destino",
    });
    setSelectedOrigen({
      id: null,
      Name: "Origen",
    });
    setValue([null, null]);
  };

  const onPassengerSelect = () => {
    setOrigen(false);
    setPassengersTab(!passengersTab);
  };

  return (
    <>
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
                        onClick={() => OnTabSWitch(1)}
                      >
                        Viaje de iday vuelta
                      </label>
                      <label
                        className={`form_tab ${
                          activeTab === 2 ? "tab_active" : ""
                        }`}
                        onClick={() => OnTabSWitch(2)}
                      >
                        {" "}
                        Solo ida
                      </label>
                    </div>
                    <div className="d-md-flex">
                      <div className="row " style={{ position: "relative" }}>
                        <div className="from_main">
                          <div className="from">
                            <h2 className="from_heading">
                              {selectedOrigen.Name}
                            </h2>
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
                            <h2 className="from_heading text-right">
                              {selectedDestination.Name}
                            </h2>
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
                        <div
                          className="calendar"
                          // onClick={()=>setAutoOpen(!autoOpen)}
                        >
                          {activeTab === 1 && (
                            <MuiDateRangePicker2
                              origenId={selectedOrigen.id}
                              destinationId={selectedDestination.id}
                              autoOpen={autoOpen}
                              setAutoOpen={setAutoOpen}
                              value={value}
                              setValue={setValue}
                              setPassengersTab={setPassengersTab}
                            />
                          )}
                          {activeTab === 2 && (
                            <MuiDatePicker
                              selectedDate={selectedDate}
                              setSelectedDate={setSelectedDate}
                              autoOpen={autoOpen}
                              setPassengersTab={setPassengersTab}
                              setAutoOpen={setAutoOpen}
                            />
                          )}
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
                    {origen && (
                      <div className="d-flex w-100 justify-content-sm-center justify-content-md-start">
                        <div className="select_component" id="select_from">
                          <ul style={{ listStyle: "none" }} className="p-0">
                            {fromLocation.map((el) => (
                              <div className="from_list" key={el.id}>
                                {el.category === "B" ? (
                                  <>
                                    {el.letter && (
                                      <li
                                        style={{
                                          backgroundColor: "#ff8200",
                                          color: "white",
                                        }}
                                        className="pl-2 my-0 py-0"
                                      >
                                        <h6 className="m-0">B</h6>
                                      </li>
                                    )}
                                    <li
                                      className="px-3 py-2 select_from"
                                      onClick={() =>
                                        onClickHanlder(el.id, el.name)
                                      }
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
                                    {el.letter && (
                                      <li
                                        style={{
                                          backgroundColor: "#ff8200",
                                          color: "white",
                                        }}
                                        className="pl-2 my-0 py-0"
                                      >
                                        <h6 className="m-0">C</h6>
                                      </li>
                                    )}
                                    <li
                                      className="px-3 py-2 select_from"
                                      onClick={() =>
                                        onClickHanlder(el.id, el.name)
                                      }
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
                                    {el.letter && (
                                      <li
                                        style={{
                                          backgroundColor: "#ff8200",
                                          color: "white",
                                        }}
                                        className="pl-2 my-0 py-0"
                                      >
                                        <h6 className="m-0">M</h6>
                                      </li>
                                    )}
                                    <li
                                      className="px-3 py-2 select_from"
                                      onClick={() =>
                                        onClickHanlder(el.id, el.name)
                                      }
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
                                      {el.letter && (
                                        <li
                                          style={{
                                            backgroundColor: "#ff8200",
                                            color: "white",
                                          }}
                                          className="pl-2 my-0 py-0"
                                        >
                                          <h6 className="m-0">P</h6>
                                        </li>
                                      )}
                                      <li
                                        className="px-3 py-2 select_from"
                                        onClick={() =>
                                          onClickHanlder(el.id, el.name)
                                        }
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
                                      {el.letter && (
                                        <li
                                          style={{
                                            backgroundColor: "#ff8200",
                                            color: "white",
                                          }}
                                          className="pl-2 my-0 py-0"
                                        >
                                          <h6 className="m-0">S</h6>
                                        </li>
                                      )}
                                      <li
                                        className="px-3 py-2 select_from"
                                        onClick={() =>
                                          onClickHanlder(el.id, el.name)
                                        }
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
                    {destination && (
                      <div className="d-flex w-100 justify-content-sm-center justify-content-md-start">
                        <div className="select_component" id="select_from">
                          <ul style={{ listStyle: "none" }} className="p-0">
                            {showDestinations.length > 0 &&
                              showDestinations.map((el) => (
                                <div className="to_list" key={el.id}>
                                  {el.category === "B" ? (
                                    <>
                                      {el.letter && (
                                        <li
                                          style={{
                                            backgroundColor: "#ff8200",
                                            color: "white",
                                          }}
                                          className="pl-2 my-0 py-0"
                                        >
                                          <h6 className="m-0">B</h6>
                                        </li>
                                      )}
                                      <li
                                        className="px-3 py-2 select_from"
                                        onClick={() =>
                                          destinationHandler(el.id, el.name)
                                        }
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
                                      {el.letter && (
                                        <li
                                          style={{
                                            backgroundColor: "#ff8200",
                                            color: "white",
                                          }}
                                          className="pl-2 my-0 py-0"
                                        >
                                          <h6 className="m-0">C</h6>
                                        </li>
                                      )}
                                      <li
                                        className="px-3 py-2 select_from"
                                        onClick={() =>
                                          destinationHandler(el.id, el.name)
                                        }
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
                                      {el.letter && (
                                        <li
                                          style={{
                                            backgroundColor: "#ff8200",
                                            color: "white",
                                          }}
                                          className="pl-2 my-0 py-0"
                                        >
                                          <h6 className="m-0">M</h6>
                                        </li>
                                      )}
                                      <li
                                        className="px-3 py-2 select_from"
                                        onClick={() =>
                                          destinationHandler(el.id, el.name)
                                        }
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
                                        {el.letter && (
                                          <li
                                            style={{
                                              backgroundColor: "#ff8200",
                                              color: "white",
                                            }}
                                            className="pl-2 my-0 py-0"
                                          >
                                            <h6 className="m-0">P</h6>
                                          </li>
                                        )}
                                        <li
                                          className="px-3 py-2 select_from"
                                          onClick={() =>
                                            destinationHandler(el.id, el.name)
                                          }
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
                                        {el.letter && (
                                          <li
                                            style={{
                                              backgroundColor: "#ff8200",
                                              color: "white",
                                            }}
                                            className="pl-2 my-0 py-0"
                                          >
                                            <h6 className="m-0">S</h6>
                                          </li>
                                        )}
                                        <li
                                          className="px-3 py-2 select_from"
                                          onClick={() =>
                                            destinationHandler(el.id, el.name)
                                          }
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
                    {passengersTab && (
                      <Passengers
                        passengers={passengers}
                        setPassengers={setPassengers}
                        adulto={adulto}
                        setAdulto={setAdulto}
                        ninos={ninos}
                        setNinos={setNinos}
                        bebe={bebe}
                        setBebe={setBebe}
                      />
                    )}
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
                  <button
                    disabled={
                      selectedOrigen.id &&
                      selectedDestination.id &&
                      ((activeTab === 1 && value[1] !== null) ||
                        (activeTab === 2 && selectedDate))
                        ? false
                        : true
                    }
                    style={{
                      position: "absolute",
                      right: "30px",
                      bottom: "-30px",
                      borderRadius: "50%",
                      padding: "20px",
                      border: "none",
                    }}
                    onClick={submitHandler}
                  >
                    <FaPaperPlane
                      style={{ fontSize: "30px", color: "#ff8200" }}
                    />
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Gallery2;
