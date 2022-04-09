import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { Card } from "../../SharedComponents/Card";
import datesAreOnSameDay from "./DateFunctions";
import { isWeekend } from "./DateFunctions";
import RequestAssignment from "./RequestAssignment";
import { Primary, SecondBackup, Backup, Accompaniment } from "./ShiftTypes";

const ShiftCard = ({
    contactList,
    date,
    events,
    setEvents,
    shift,
    contactListSelectable,
  }) => {
    const startTime = moment(shift.start).format("hh:mmA");
    const endTime = moment(shift.end).format("hh:mmA");
    const [includeSecondBackup, setIncludeSecondBackup] = useState(false);
    const [includeAccompaniment, setIncludeAccompaniment] = useState(false);
  
    function assignNew(name, type) {
      if (name !== "") {
        const info = name
          ? contactList.filter((contact) => contact.name === name)[0]
          : undefined;
        let localEvents = events.map((event) => {
          if (datesAreOnSameDay(event.start, date)) {
            event.shifts.forEach((eventShift) => {
              if (
                new Date(eventShift.start).getTime() ===
                  new Date(shift.start).getTime() &&
                new Date(eventShift.end).getTime() ===
                  new Date(shift.end).getTime()
              ) {
                switch (type) {
                  case "primary":
                    eventShift.info.primary = info;
                    break;
                  case "backup":
                    eventShift.info.backup = info;
                    break;
                  case "accompaniment":
                    setIncludeAccompaniment(false);
                    eventShift.info.accompaniment = info;
                    break;
                  case "secondBackup":
                    setIncludeSecondBackup(false);
                    eventShift.info.secondBackup = info;
                    break;
                  default:
                    break;
                }
              }
            });
          }
          return event;
        });
        window.sessionStorage.setItem("events", JSON.stringify(localEvents));
        setEvents(localEvents);
      }
    }
  
    function reassign(type) {
      let localEvents = events.map((event) => {
        if (datesAreOnSameDay(event.start, date)) {
          event.shifts.forEach((eventShift) => {
            if (
              new Date(eventShift.start).getTime() ===
                new Date(shift.start).getTime() &&
              new Date(eventShift.end).getTime() === new Date(shift.end).getTime()
            ) {
              eventShift.info[type] = undefined;
            }
          });
        }
        return event;
      });
      window.sessionStorage.setItem("events", JSON.stringify(localEvents));
      setEvents(localEvents);
    }
  
    return (
      <Card flexDir="row" w="100%">
        <Box>
          <Heading fontSize="24px">{`${startTime} - ${endTime}`}</Heading>
        </Box>
        <Spacer />
        <VStack w="100%" spacing="4px">
          <Primary
            primaryInfo={shift.info.primary}
            contactListSelectable={contactListSelectable}
            assignNew={assignNew}
            reassign={reassign}
          />
          <Backup
            backupInfo={shift.info.backup}
            contactListSelectable={contactListSelectable}
            assignNew={assignNew}
            reassign={reassign}
          />
          {shift.info.accompaniment || isWeekend(date) ? (
            <Accompaniment
              date={date}
              setIncludeAccompaniment={setIncludeAccompaniment}
              accompanimentInfo={shift.info.accompaniment}
              contactListSelectable={contactListSelectable}
              assignNew={assignNew}
              reassign={reassign}
            />
          ) : includeAccompaniment ? (
            <RequestAssignment
              required={isWeekend(date)}
              type="accompaniment"
              label="Accompaniment"
              contactListSelectable={contactListSelectable}
              assignNew={assignNew}
              reassign={reassign}
              setInclude={setIncludeAccompaniment}
            />
          ) : (
            <Button w="100%" onClick={() => setIncludeAccompaniment(true)}>
              Add Accompaniment
            </Button>
          )}
          <SecondBackup
            includeSecondBackup={includeSecondBackup}
            setIncludeSecondBackup={setIncludeSecondBackup}
            secondBackupInfo={shift.info.secondBackup}
            contactListSelectable={contactListSelectable}
            assignNew={assignNew}
            reassign={reassign}
          />
        </VStack>
      </Card>
    );
  };

export default ShiftCard