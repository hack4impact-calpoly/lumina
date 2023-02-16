import { Heading, useDisclosure } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import {
  Calendar as LuminaCalendar,
  luxonLocalizer,
  Views,
  Event,
} from 'react-big-calendar';
import HomePage from '../components/HomePage';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/calendar.css';
import EventModal from '../components/EventModal';
import { useEvents } from '../components/HomeWrapper';

function Calendar() {
  const localizer = luxonLocalizer(DateTime);
  const events = useEvents();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState<Event>(events[0]);

  const handleSelectedEvent = (event: Event) => {
    setSelected(event);
    onOpen();
  };

  return (
    <HomePage>
      <Heading>Calendar</Heading>
      <LuminaCalendar
        localizer={localizer}
        onSelectEvent={handleSelectedEvent}
        defaultView={Views.WEEK}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '90%' }}
      />
      <EventModal isOpen={isOpen} onClose={onClose} selected={selected} />
    </HomePage>
  );
}

export default Calendar;
