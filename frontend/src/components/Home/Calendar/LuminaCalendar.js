import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { isMobile } from "react-device-detect";

const localizer = momentLocalizer(moment);

const LuminaCalendar = ({ events, setCurrentEvent, w }) => {
  return (
    <Calendar
      selectable
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ maxHeight: "75vh", width: w }}
      views={isMobile ? ["month"] : ["month", "day"]}
      onSelectEvent={(e) => setCurrentEvent(e)}
    />
  );
};

export default LuminaCalendar;
