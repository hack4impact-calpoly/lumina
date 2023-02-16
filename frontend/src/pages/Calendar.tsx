import { Heading } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import React from 'react';
import {
  Calendar as LuminaCalendar,
  luxonLocalizer,
  Views,
} from 'react-big-calendar';
import HomePage from '../components/HomePage';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/calendar.css';
import { getEventTime } from '../hooks/fake';

function Calendar() {
  const localizer = luxonLocalizer(DateTime);
  console.log(getEventTime());
  return (
    <HomePage>
      <Heading>Calendar</Heading>
      <LuminaCalendar
        localizer={localizer}
        defaultView={Views.WEEK}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '90%' }}
      />
    </HomePage>
  );
}

export default Calendar;
