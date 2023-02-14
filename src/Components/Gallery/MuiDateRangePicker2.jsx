import { Box, TextField } from "@mui/material";
import { DateRangePicker, DateRange, DatePicker } from "@mui/lab";
import { useEffect, useState } from "react";
import CalendarImg from "../../images/calendar.png";
import { getFlightAmont } from "./location";

export const MuiDateRangePicker2 = ({
  origenId,
  destinationId,
  autoOpen,
  setAutoOpen,
  value,
  setValue,
  setPassengersTab,
}) => {
  //   console.log(value);
  const [selectedDates, setSelectedDates] = useState([]);

  const onClose = () => {
    if (value[0] !== null) {
      setAutoOpen(false);
    //   setPassengersTab(true);
    }
  };
  useEffect(() => {
  }, [autoOpen, value]);

  return (
    <Box width="700px">
      <DateRangePicker
      
        startText="Salida"
        endText="Regreso"
        minDate={new Date()}
        value={value}
        open={autoOpen}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        onClose={onClose}
        renderInput={(startProps, endProps) => (
          <>
            <Box sx={{ position: "relative" }} onClick={()=>{setAutoOpen(true);setValue([null,null])}}>
              <TextField {...startProps} sx={{ border: "none" }}/>
              <div className="calendar_icon">
                <img
                  src={CalendarImg}
                  style={{
                    width: "18px",
                    height: "18px",
                    position: "absolute",
                    top: "20px",
                    right: "10px",
                  }}
                />
              </div>
            </Box>
            <Box sx={{ mx: 0.5 }}> </Box>
            <Box sx={{ position: "relative" }}>
              <TextField {...endProps} />
              <div className="calendar_icon">
                <img
                  src={CalendarImg}
                  style={{
                    width: "18px",
                    height: "18px",
                    position: "absolute",
                    top: "20px",
                    right: "10px",
                  }}
                />
              </div>
            </Box>
          </>
        )}
        // renderDay={renderDayInPicker}
      />
    </Box>
  );
};

export const MuiDatePicker = ({ selectedDate, setSelectedDate, autoOpen,
    setAutoOpen,setPassengersTab }) => {
  return (
    <>
      <DatePicker
        sx={{ width: "100%" }}
        value={selectedDate}
        open={autoOpen}
        onChange={(newValue) => {
          setSelectedDate(newValue);
          setAutoOpen(false)
        //   setPassengersTab(true)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
};

//   const renderDayInPicker = (day) => {
//     if (origenId && destinationId) {
//       const findEl = getFlightAmont.find((el) => {
//         if (el.from == origenId && el.to == destinationId) {
//           return el;
//         }
//       });
//       return findEl.detail.map((item) => {
//         if (item.days.includes(day.getDay())) {
//           const year1 = day.getFullYear();
//           let month1 = day.getMonth() + 1; // Months start at 0!
//           let day1 = day.getDate();
//           if (day1 < 10) day1 = "0" + day1;
//           if (month1 < 10) month1 = "0" + month1;
//           const formattedDate1 = day1 + "/" + month1 + "/" + year1;

//           return (
//             <div
//               style={{
//                 margin: "0 10px",
//                 // lineHeight: 0.5,

//                 color: "#ff8200",
//               }}
//             >
//               <p>{day.getDate()}</p>
//               <p
//                 style={{
//                   fontSize: "0.7rem",
//                   lineHeight: 0,
//                   color: "black",
//                 }}
//               >
//                 {item.prices}
//               </p>
//             </div>
//           );
//         }
//       });
//     } else {
//       return (
//         <div
//           style={{
//             margin: "0 10px",
//             // lineHeight: 0.5,

//             color: "#ff8200",
//           }}
//         >
//           <p>{day.getDate()}</p>
//         </div>
//       );
//     }
//   };
