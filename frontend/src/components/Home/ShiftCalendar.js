import React, { useState } from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ShiftCalendar = () => {
  const [events, setEvents] = useState([
    {
      start: new Date('February 14, 2022 12:00:00'),
      end: new Date('February 14, 2022 15:00:00'),
      title: "Some title",
    },
  ]);
  return (
    <Flex flexDir="row">
      <Heading minW="400px" mr="90px">
        Sunday
      </Heading>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "80vh", widthL: "800px" }}
        onClick={() => console.log("CLICKED")}
      />
    </Flex>
  );
};

export default ShiftCalendar;
