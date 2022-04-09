import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserView, MobileView } from "react-device-detect";
import datesAreOnSameDay from "./DateFunctions";
import ShiftCalendarBrowser from "./ShiftCalendarBrowser";
import ShiftCalendarMobile from "./ShiftCalendarMobile";

const emptyEvent = {
  id: 0,
  title: "2/2",
  start: new Date(),
  end: new Date(),
  shifts: [],
  allDay: true,
};

const ShiftCalendar = ({ contactList }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState();

  useEffect(() => {
    let sessionStorageEvents = window.sessionStorage.getItem("events");
    if (sessionStorageEvents === null) {
      //insert API call
      let tempEvents = [
        {
          id: 0,
          title: "2/2",
          start: new Date(2022, 1, 18),
          end: new Date(2022, 1, 19),
          shifts: [
            {
              start: new Date(2022, 1, 18, 10),
              end: new Date(2022, 1, 18, 13),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Lenna Hane",
                  phone: "(805) 555 - 555",
                },
                secondBackup: {
                  name: "Eliane Schneider",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 1, 18, 9),
              end: new Date(2022, 1, 18, 17),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Donna Cruz",
                  phone: "(805) 555 - 555",
                },
                accompaniment: {
                  name: "Emmalee Stark",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 1, 18, 10),
              end: new Date(2022, 1, 18, 18),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Emmalee Stark",
                  phone: "(805) 555 - 555",
                },
              },
            },
          ],
          allDay: true,
          allDayShift: {
            backup: {
              name: "Bernita Collier",
              phone: "(805) 555 - 555",
            },
          },
        },
        {
          id: 0,
          title: "2/2",
          start: new Date(2022, 2, 18),
          end: new Date(2022, 2, 19),
          shifts: [
            {
              start: new Date(2022, 2, 18, 10),
              end: new Date(2022, 2, 18, 13),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Lenna Hane",
                  phone: "(805) 555 - 555",
                },
                secondBackup: {
                  name: "Eliane Schneider",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 2, 18, 9),
              end: new Date(2022, 2, 18, 17),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Donna Cruz",
                  phone: "(805) 555 - 555",
                },
                accompaniment: {
                  name: "Emmalee Stark",
                  phone: "(805) 555-5555",
                },
              },
            },
            {
              start: new Date(2022, 2, 18, 10),
              end: new Date(2022, 2, 18, 18),
              title: "2/2",
              info: {
                primary: {
                  name: "Adriel Bogan",
                  phone: "(805) 555 - 555",
                },
                backup: {
                  name: "Emmalee Stark",
                  phone: "(805) 555 - 555",
                },
              },
            },
          ],
          allDay: true,
          allDayShift: {
            backup: {
              name: "Bernita Collier",
              phone: "(805) 555 - 555",
            },
          },
        },
      ];
      setEvents(tempEvents);
      window.sessionStorage.setItem("events", JSON.stringify(tempEvents));
    } else {
      setEvents(JSON.parse(sessionStorageEvents));
    }
  }, []);

  var contactListSelectable = [];
  contactList.forEach((contact) => {
    contactListSelectable.push({ value: contact.name, label: contact.name });
  });

  function findNearestEvent() {
    events.forEach((event) => {
      if (datesAreOnSameDay(new Date(event.start), new Date())) {
        setCurrentEvent(event);
        return;
      }
    });
    setCurrentEvent(emptyEvent);
  }

  return (
    <Box w="100%">
      <BrowserView style={{ width: "100%" }}>
        {currentEvent ? (
          <ShiftCalendarBrowser
            contactList={contactList}
            date={new Date(currentEvent.start)}
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            events={events}
            setEvents={setEvents}
            contactListSelectable={contactListSelectable}
          />
        ) : (
          findNearestEvent()
        )}
      </BrowserView>
      <MobileView style={{ width: "100%" }}>
        {currentEvent ? (
          <ShiftCalendarMobile
            contactList={contactList}
            date={new Date(currentEvent.start)}
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            events={events}
          />
        ) : (
          findNearestEvent()
        )}
      </MobileView>
    </Box>
  );
};

export default ShiftCalendar;
