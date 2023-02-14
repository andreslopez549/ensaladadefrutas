import {
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { CgAirplane } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import "../FlightDetails.css";
import Logo from "../../images/Logo.PNG";
import { Container as BootstrapContainer, Row, Col } from "react-bootstrap";
import "./BookingForm.css";
import { RiSendPlaneFill } from "react-icons/ri";
import BookingHeader from "../../Components/FlightDetails/BookingHeader";
import CartModal from "../../Components/FlightDetails/CartModal/CartModal";
import { successNotify } from "../../utils/toast";
import { BookingsState } from "../../Context/BookingDetailsProvider";

const BookingForm = () => {
  const { details, setDetails } = BookingsState();
  const [allDetails, setAllDetails] = useState();
  // const [allForms, setAllForms] = useState([]);
  const [activeForm, setActiveForm] = useState(1);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formDetails, setFormDetails] = useState({
    name: "",
    lastname: "",
    gender: "",
    DOB: "",
    country: "",
    typeOfId: "",
    idNumber: "",
    issuingCountry: "",
  });

  const validate = () => {
    let temp = {};
    temp.name = formDetails.name ? "" : " * Nombre is required";
    temp.lastname = formDetails.lastname ? "" : " * Apellidos is required";
    temp.DOB = formDetails.DOB ? "" : " * Genero is required";
    temp.idNumber = formDetails.idNumber
      ? ""
      : " * Fecha de nacimiento is required";
    temp.gender = formDetails.gender.length !== 0 ? "" : " * Pais is required";
    temp.country =
      formDetails.country.length !== 0
        ? ""
        : " * Tipo de documento is required";
    temp.typeOfId =
      formDetails.typeOfId.length !== 0
        ? ""
        : " * Numero de documento is required";
    temp.issuingCountry =
      formDetails.issuingCountry.length !== 0
        ? ""
        : " * Pais Emisor is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const {
    name,
    lastname,
    gender,
    DOB,
    country,
    typeOfId,
    idNumber,
    issuingCountry,
  } = formDetails;
  const location = useLocation();
  useEffect(() => {
    setAllDetails(location.state);
    setDetails([]);
  }, [location]);
  // console.log(allDetails);
  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (validate()) {
      setDetails([]);
      e.preventDefault();
      if (allDetails?.bookingDetails?.passengers > activeForm) {
        // console.log("1");
        // setAllForms([...allForms, formDetails]);
        setDetails([...details, formDetails]);
        setFormDetails({
          name: "",
          lastname: "",
          gender: "",
          DOB: "",
          country: "",
          typeOfId: "",
          idNumber: "",
          issuingCountry: "",
        });

        // setFormDetails({ [e.target.name]: "" });
        setActiveForm(activeForm + 1);
      } else {
        // console.log("2");
        // setAllForms([...allForms, formDetails]);
        setDetails([...details, formDetails]);

        successNotify("Thank You! Booking Details sent successfully");
        // setDetails(formData);
        setTimeout(() => {
          navigate("/payment", { state: allDetails });
        }, 300);
      }
    }
  };

  // console.log(details);
  // console.log(allForms);

  return (
    <Box className="main">
      <Box className="bg_cover">
        <BookingHeader bookingDetails={allDetails?.bookingDetails} />
      </Box>
      <Box
        sx={{
          backgroundColor: "#f5f8fb",
          width: "100vw",
          maxWidth: "100%",
          height: "100%",
          m: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Typography variant="h4" sx={{ color: "#979696", my: 3, pl: 2 }}>
            PASAJERO {activeForm}-
          </Typography>
          <Paper
            sx={{
              p: { xs: 1, md: 2 },
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "20px",
            }}
          >
            <Grid container spacing={5} className="formBox">
              <Grid item xs={12} md={6}>
                <form>
                  <TextField
                    fullWidth
                    error={errors.name !== null ? true : false}
                    helperText={errors.name !== null ? errors.name : ""}
                    sx={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      my: 2,
                      color: "lightgrey",
                    }}
                    placeholder="Nombre"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    error={errors.lastname !== null ? true : false}
                    helperText={errors.lastname !== null ? errors.lastname : ""}
                    sx={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      color: "lightgrey",
                      my: 2,
                    }}
                    placeholder="Apellidos"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: { xs: "100%", sm: "40%" } }}>
                      <FormControl
                        error={errors.gender ? true : false}
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
                          Genero
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={gender}
                          // label="Age"
                          name="gender"
                          onChange={handleChange}
                        >
                          <MenuItem value="male">male</MenuItem>
                          <MenuItem value="female">female</MenuItem>
                          <MenuItem value="other">other</MenuItem>
                        </Select>
                        {errors.gender ? (
                          <FormHelperText>{errors.gender}</FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "55%" } }}>
                      <TextField
                        error={errors.DOB !== null ? true : false}
                        helperText={errors.DOB !== null ? errors.DOB : ""}
                        fullWidth
                        sx={{
                          border: "1px solid lightgrey",
                          borderRadius: "10px",
                          color: "lightgrey",

                          my: 2,
                        }}
                        value={DOB}
                        name="DOB"
                        placeholder="Fecha de nacimiento(DD/MM/AAAA)"
                        onChange={handleChange}
                      />
                    </Box>
                  </Box>
                  <FormControl
                    error={errors.country ? true : false}
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
                      Pais
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={country}
                      label="Pais"
                      name="country"
                      onChange={handleChange}
                    >
                      <MenuItem value="France">France</MenuItem>
                      <MenuItem value="Germany">Germany</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                    {errors.country ? (
                      <FormHelperText>{errors.country}</FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: { xs: "100%", sm: "40%" } }}>
                      <FormControl
                        error={errors.typeOfId ? true : false}
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
                          Tipo de documento
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={typeOfId}
                          label="Tipo de documento"
                          name="typeOfId"
                          onChange={handleChange}
                        >
                          <MenuItem value="Cedula de Ciudadania">
                            Cedula de Ciudadania
                          </MenuItem>
                          <MenuItem value="Passport">Passport</MenuItem>
                          <MenuItem value="Tarjeta de Identidad">
                            Tarjeta de Identidad
                          </MenuItem>
                          <MenuItem value="Registro Civil">
                            Registro Civil
                          </MenuItem>
                          <MenuItem value="Cedula de Extranjeria">
                            Cedula de Extranjeria
                          </MenuItem>
                        </Select>
                        {errors.typeOfId ? (
                          <FormHelperText>{errors.typeOfId}</FormHelperText>
                        ) : (
                          ""
                        )}
                      </FormControl>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "55%" } }}>
                      <TextField
                        error={errors.idNumber !== null ? true : false}
                        helperText={
                          errors.idNumber !== null ? errors.idNumber : ""
                        }
                        fullWidth
                        sx={{
                          border: "1px solid lightgrey",
                          borderRadius: "10px",
                          color: "lightgrey",

                          my: 2,
                        }}
                        value={idNumber}
                        name="idNumber"
                        placeholder="Numero de documento"
                        onChange={handleChange}
                      />
                    </Box>
                  </Box>
                  <FormControl
                    error={errors.issuingCountry ? true : false}
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
                      Pais Emisor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={issuingCountry}
                      label="Pais Emisor"
                      name="issuingCountry"
                      onChange={handleChange}
                    >
                      <MenuItem value="France">France</MenuItem>
                      <MenuItem value="Germany">Germany</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                    {errors.issuingCountry ? (
                      <FormHelperText>{errors.issuingCountry}</FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                </form>
              </Grid>

              <Grid item xs={12} md={6} sx={{ my: 2 }}>
                <Typography>¡Ey Ultra viajero!</Typography>
                <Typography sx={{ my: 2 }}>
                  Ten presente que la asignación de sillas es aleatoria. Si
                  viajas con niños, asegúrate de seleccionar tu silla y la de
                  los pequeños a tu lado. Los niños, no pagan por su silla
                </Typography>
                <Box sx={{ py: 2 }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Necesito asistencia especial"
                    />
                  </FormGroup>
                  <FormGroup sx={{ my: 1 }}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Acepto recibir Ultra Promo y las políticas de tramiento de datos de Ultar Air"
                    />
                  </FormGroup>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
      <CartModal
        items={allDetails?.bookingDetails?.passengers}
        totalAmount={allDetails?.totalAmount}
        buttonText="Próximo pasajero"
        cartSubmit={handleSubmit}
        Submit="Submit"
      />
    </Box>
  );
};

export default BookingForm;
