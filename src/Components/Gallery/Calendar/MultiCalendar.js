import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import moment from "moment";
import { getFlightAmont } from "../location";
const MultiCalendar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  originId,
  destinationId,
}) => {
  console.log("origin", originId);
  console.log("destination", destinationId);
  return (
    <div className="multiCalendar">
      <div className="calendar_component">
        <div className="start_date">
          <Calendar
            value={startDate}
            onChange={setStartDate}
            style={{ height: "100%" }}
            tileContent={({ date, view }) => {
              const findLocation = getFlightAmont.find(
                (el) => el.from === originId && el.to === destinationId
              );
              if (findLocation) {
                return findLocation.detail.map((val) => {
                  if (val.days.includes(date.getDay()))
                    return val.prices.toString();
                });
              }
              return "0";
            }}
          />
        </div>

        <div className="end_date">
          <Calendar
            value={endDate}
            onChange={setEndDate}
            tileContent={({ date, view }) => {
              const findLocation = getFlightAmont.find(
                (el) => el.from === originId && el.to === destinationId
              );
              if (findLocation) {
                return findLocation.detail.map((val) => {
                  if (val.days.includes(date.getDay()))
                    return val.prices.toString();
                });
              }
              return "0";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiCalendar;
