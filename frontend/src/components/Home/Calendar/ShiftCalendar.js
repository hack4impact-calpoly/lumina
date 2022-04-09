import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserView, MobileView } from "react-device-detect";
import datesAreOnSameDay, { getDaysInMonth } from "./DateFunctions";
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

  function cancelShift() {
    //nothing
  }

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

  function prepopulate() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth + 1);
    let newEvents = deleteCurrentMonthShifts(currentMonth);;
    for (let i = 1; i < daysInMonth + 1; i++) {
      const startDate = new Date(currentYear, currentMonth, i);
      const endDate = new Date(currentYear, currentMonth, i + 1);
      let shifts = [];
      switch (startDate.getDay()) {
        case 0:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 0),
              end: new Date(currentYear, currentMonth, i, 8),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 8),
              end: new Date(currentYear, currentMonth, i, 12),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 12),
              end: new Date(currentYear, currentMonth, i, 16),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 16),
              end: new Date(currentYear, currentMonth, i + 1, 0),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        case 1:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 0),
              end: new Date(currentYear, currentMonth, i, 8, 30),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 17),
              end: new Date(currentYear, currentMonth, i + 1, 8, 30),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        case 2:
        case 3:
        case 4:
        case 5:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 17),
              end: new Date(currentYear, currentMonth, i + 1, 8, 30),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        case 6:
          shifts = [
            {
              start: new Date(currentYear, currentMonth, i, 8),
              end: new Date(currentYear, currentMonth, i, 16),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
            {
              start: new Date(currentYear, currentMonth, i, 16),
              end: new Date(currentYear, currentMonth, i + 1, 0),
              title: "2/2",
              info: {
                primary: undefined,
                backup: undefined,
                accompaniment: undefined,
                secondBackup: undefined,
              },
            },
          ];
          break;
        default:
          console.log("Invalid day");
          break;
      }
      const newEvent = {
        id: 0,
        title: "2/2",
        start: startDate,
        end: endDate,
        shifts: shifts,
      };
      newEvents.push(newEvent);
    }
    setEvents(newEvents);
    sessionStorage.setItem("events", JSON.stringify(newEvents));
  }

  function deleteCurrentMonthShifts(currentMonth) {
    let newEvents = events;
    newEvents = newEvents.filter((event) => new Date(event.start).getMonth() !== currentMonth);
    return newEvents
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
            cancelShift={cancelShift}
            prepopulate={prepopulate}
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
            setEvents={setEvents}
            contactListSelectable={contactListSelectable}
            cancelShift={cancelShift}
            prepopulate={prepopulate}
          />
        ) : (
          findNearestEvent()
        )}
      </MobileView>
    </Box>
  );
};

export default ShiftCalendar;
