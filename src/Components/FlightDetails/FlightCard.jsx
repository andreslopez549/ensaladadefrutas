import { Button, Card, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'

const FlightCard = ({el,bookingDetails,total,date1,date,onSubmit ,origin,destination}) => {
  return (
    <Card className="flight_card">
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: { xs: "100%", md: "75%" },
                          }}
                        >
                          <Typography sx={{ p: 1 }}>
                            Numero de vuelo: {el.flightNo}
                          </Typography>
                          <Divider />
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: { xs: "column", md: "row" },
                              justifyContent: {
                                xs: "flex-start",
                                md: "space-between",
                              },
                              width: "100%",
                              p: 2,
                            }}
                          >
                            <Box sx={{}}>
                              <Typography className="text-muted my-2">
                                Salida
                              </Typography>
                              {destination ===true ? (
                              <Typography variant="h5" className="my-2">
                                {bookingDetails?.destinationCode}
                              </Typography>
                              ):
                              <Typography variant="h5" className="my-2">
                                {bookingDetails?.origenCode}
                              </Typography>
                              }
                              <Typography className="my-2">
                                {date1}
                              </Typography>
                              <Typography className="my-2">
                                {el.departTime}
                              </Typography>
                              <Typography
                                className="mb-1 text-muted "
                                sx={{ fontSize: "0.7rem" }}
                              >
                                Operado porUltra Air - 320
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box className="flight_duration">
                                <div></div>
                                <RiSendPlaneFill />
                                <div></div>
                              </Box>
                              <Typography>Directo</Typography>
                              <Typography variant="h6" className="text-muted">
                                {el.timeDiff}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className="text-muted my-2">
                                Llegada
                              </Typography>
                             {destination ===true ? (
                             <Typography variant="h5" className="my-2">
                                {bookingDetails?.origenCode}
                              </Typography>
                              ):(
                                <Typography variant="h5" className="my-2">
                                {bookingDetails?.destinationCode}
                              </Typography>
                              )
                              }
                              <Typography className="my-2">
                                {date1}
                              </Typography>
                              <Typography className="mt-2 mb-1">
                                {el.returnTime}
                              </Typography>
                              <Typography
                                className="mb-1 text-muted "
                                sx={{ fontSize: "0.7rem" }}
                              >
                                Operado porUltra Air - 320
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Box sx={{ p: 2 }}>
                            <Typography
                              className="text-muted"
                              sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}
                            >
                              * Sujeto a aprobacion gubernamental
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            backgroundColor: "#f1f1f1",
                            width: { xs: "100%", md: "25%" },
                            p: 1,
                          }}
                        >
                          <Box
                            sx={{ textAlign: { xs: "center", md: "right" } }}
                          >
                            <Typography>Origen</Typography>
                            <Typography
                              variant="h4"
                              sx={{
                                color: "red",
                                fontSize: {
                                  xs: "1.5rem",
                                  md: "1.8rem",
                                  lg: "2.1rem",
                                },
                              }}
                            >
                              {total}
                              COP
                            </Typography>
                          </Box>
                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Button
                              variant="contained"
                              onClick={()=>onSubmit(el)}
                              sx={{
                                backgroundColor: "#ff8200",
                                borderRadius: "20px",
                                width: "70%",
                                padding: "10px 40px",
                              }}
                            >
                              SELECCIONAR
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
  )
}

export default FlightCard