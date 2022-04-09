import React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { isWeekend } from "./DateFunctions";
import RequestAssignment from "./RequestAssignment";

export const Primary = ({
  primaryInfo,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Flex bg={primaryInfo ? "yellow.100" : "orange.100"} w="100%" p={2}>
      {primaryInfo ? (
        <Flex align="center" w="100%">
          <CheckIcon boxSize={7} mr="20px" />
          <Box w="100%">
            <Flex align="center" w="100%">
              <Text fontWeight="bold" mr={3}>
                Primary
              </Text>
              <Spacer />
              <Button size="xs" onClick={() => reassign("primary")}>
                Re-assign
              </Button>
            </Flex>
            <Text>{primaryInfo.name}</Text>
            <Text>{primaryInfo.phone}</Text>
          </Box>
        </Flex>
      ) : (
        <RequestAssignment
          required
          type="primary"
          label="Primary"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
        />
      )}
    </Flex>
  );
};

export const Backup = ({
  backupInfo,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Box bg="green.100" w="100%" p={2}>
      {backupInfo ? (
        <Box>
          <Flex>
            <Text fontSize="20px" fontWeight="bold">
              Backup
            </Text>
            <Spacer />
            <Button size="xs" onClick={() => reassign("backup")}>
              Re-assign
            </Button>
          </Flex>
          <Text fontSize="16px">{`${backupInfo.name} - ${backupInfo.phone}`}</Text>
        </Box>
      ) : (
        <RequestAssignment
          required
          type="backup"
          label="Backup"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
        />
      )}
    </Box>
  );
};

export const Accompaniment = ({
  date,
  accompanimentInfo,
  setIncludeAccompaniment,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Box w="100%">
      {accompanimentInfo ? (
        <Box bg="pink.100" p={2}>
          <Flex>
            <Text fontSize="20px" fontWeight="bold">
              Accompaniment
            </Text>
            <Spacer />
            <Button size="xs" onClick={() => reassign("accompaniment")}>
              {isWeekend(date) ? "Re-assign" : "Remove"}
            </Button>
          </Flex>
          <Text fontSize="16px">{`${accompanimentInfo.name} - ${accompanimentInfo.phone}`}</Text>
        </Box>
      ) : (
        <RequestAssignment
          required={isWeekend(date)}
          type="accompaniment"
          label="Accompaniment"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
          setInclude={setIncludeAccompaniment}
        />
      )}
    </Box>
  );
};

export const SecondBackup = ({
  includeSecondBackup,
  setIncludeSecondBackup,
  secondBackupInfo,
  contactListSelectable,
  assignNew,
  reassign,
}) => {
  return (
    <Box w="100%">
      {secondBackupInfo ? (
        <Box bg="blue.100" w="100%" p={2}>
          <Box>
            <Flex>
              <Text fontSize="20px" fontWeight="bold">
                Second Backup
              </Text>
              <Spacer />
              <Button size="xs" onClick={() => reassign("secondBackup")}>
                Remove
              </Button>
            </Flex>
            <Text fontSize="16px">{`${secondBackupInfo.name} - ${secondBackupInfo.phone}`}</Text>
          </Box>
        </Box>
      ) : includeSecondBackup ? (
        <RequestAssignment
          type="secondBackup"
          label="Second Backup"
          contactListSelectable={contactListSelectable}
          assignNew={assignNew}
          reassign={reassign}
          setInclude={setIncludeSecondBackup}
        />
      ) : (
        <Button w="100%" onClick={() => setIncludeSecondBackup(true)}>
          Add Second Backup
        </Button>
      )}
    </Box>
  );
};
