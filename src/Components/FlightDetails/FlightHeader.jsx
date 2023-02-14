import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { CgAirplane } from 'react-icons/cg'
import { GiAirplaneDeparture } from 'react-icons/gi'

const FlightHeader = ({destinationName,origenName}) => {
  return (
    <Paper className="selected_flight">
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <GiAirplaneDeparture />
                  <Typography variant="h6">
                    SELECCIONAR VUELO DE SALIDA
                  </Typography>
                </Box>
                <Box className="selected_flight_details">
                  <Typography sx={{ fontSize: "1.9vmax" }}>
                    {origenName}
                  </Typography>
                  <CgAirplane style={{ fontSize: "25px", color: "#ff8200" }} />
                  <Typography sx={{ fontSize: "1.9vmax" }}>
                    {destinationName}
                  </Typography>
                </Box>
              </Box>
            </Paper>
  )
}

export default FlightHeader