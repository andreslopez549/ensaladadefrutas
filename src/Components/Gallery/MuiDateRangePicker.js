import { Box, TextField } from "@mui/material";
import { DateRangePicker, DatePicker } from "@mui/lab";
import { useEffect, useState } from "react";
import CalendarImg from "../../images/calendar.png";
import { getFlightAmont } from "./location";

export const MuiDateRangePicker = ({ originId, destinationId,autoOk,setAutoOk }) => {
  const [value, setValue] = useState([null, null]);
  const [selectedDates, setSelectedDates] = useState([]);
  useEffect(() => {
    if (selectedDates.length === 2) {
        setAutoOk(false);
    
    }
  }, [selectedDates])
  
  const renderDayinPicker = (day, selected, DayProps) => {
    if ((originId, destinationId)) {
      const findEl = getFlightAmont.find((el) => {
        if (el.from == originId && el.to == destinationId) {
          return el;
        }
      });

      function onChange(day) {
        let selectedDatesClone = selectedDates.concat();
        if (selectedDatesClone.length === 2) {
            // setAutoOk(false);
          selectedDatesClone = [day];
          setSelectedDates(selectedDatesClone);
        } else {
          selectedDatesClone.push(day);
          setSelectedDates(selectedDatesClone);
        }
      }

      return findEl.detail.map((el2) => {
        if (el2.days.includes(day.getDay())) {
          const year1 = day.getFullYear();
          let month1 = day.getMonth() + 1; // Months start at 0!
          let day1 = day.getDate();

          if (day1 < 10) day1 = "0" + day1;
          if (month1 < 10) month1 = "0" + month1;
          const formattedDate1 = day1 + "/" + month1 + "/" + year1;
          const firstDate = selectedDates[0];
          let bool = false;
          if (firstDate) {
            if (firstDate > day) {
              bool = true;
            }
          }
          return (
            <div
              className={
                selectedDates.find((date) => {
                  const year2 = date.getFullYear();
                  let month2 = date.getMonth() + 1; // Months start at 0!
                  let day2 = date.getDate();

                  if (day2 < 10) day2 = "0" + day2;
                  if (month2 < 10) month2 = "0" + month2;
                  const formattedDate2 = day2 + "/" + month2 + "/" + year2;
                  if (formattedDate1 === formattedDate2) return date;
                })
                  ? "active_day"
                  : null
              }
              style={{
                margin: "0 10px",
                // lineHeight: 0.5,

                color: "#ff8200",
              }}
              onClick={!bool ? () => onChange(day) : null}
            >
              <p>{day.getDate()}</p>
              <p
                style={{
                  fontSize: "0.7rem",
                  lineHeight: 0,
                  color: "black",
                }}
              >
                {el2.prices}
              </p>
            </div>
          );
        }
      });
    }
    return (
      <div
        style={{
          margin: "0 13px",
          // lineHeight: 0.5,

          color: "#ff8200",
        }}
        //   onClick={() => onChange(day)}
      >
        <p>{day.getDate()}</p>
      </div>
    );
  };
  return (
    <Box width="500px">
      <DateRangePicker
        sx={{ zIndex: "100000" }}
        startText="Salida"
        endText="Regreso"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        open={autoOk}
        renderInput={(startProps, endProps, onChange) => (
          <>
            <Box sx={{ position: "relative" }}>
              <TextField {...startProps} sx={{ border: "none" }} />
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
        renderDay={renderDayinPicker}
      />
    </Box>
  );
};
export const MuiDatePicker = ({ originId, destinationId }) => {
  const [selectedDate, setSelectedDate] = useState();
  const renderDayinPicker = (day, selected, DayProps) => {
    // console.log(day.getDay());
    console.log(day);
    if ((originId, destinationId)) {
      const findEl = getFlightAmont.find((el) => {
        if (el.from == originId && el.to == destinationId) {
          return el;
        }
      });

      return findEl.detail.map((el2) => {
        if (el2.days.includes(day.getDay())) {
          const year1 = day.getFullYear();
          let month1 = day.getMonth() + 1; // Months start at 0!
          let day1 = day.getDate();

          if (day1 < 10) day1 = "0" + day1;
          if (month1 < 10) month1 = "0" + month1;
          const formattedDate1 = day1 + "/" + month1 + "/" + year1;
          return (
            <div
              style={{
                margin: "0 10px",
                // lineHeight: 0.5,

                color: "#ff8200",
              }}
              // onClick={() => onChange(day)}
            >
              <p>{day.getDate()}</p>
              <p
                style={{
                  fontSize: "0.7rem",
                  lineHeight: 0,
                  color: "black",
                }}
              >
                {el2.prices}
              </p>
            </div>
          );
        }
      });
    }
    const onChange = (day) => {
      setSelectedDate(day);
    };
    return (
      <div
        style={{
          margin: "0 13px",
          // lineHeight: 0.5,

          color: "#ff8200",
        }}
        onClick={() => onChange(day)}
      >
        <p>{day.getDate()}</p>
      </div>
    );
  };

  return (
    <>
      <DatePicker
        sx={{ width: "100%" }}
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        renderDay={renderDayinPicker}
      />
    </>
  );
};
