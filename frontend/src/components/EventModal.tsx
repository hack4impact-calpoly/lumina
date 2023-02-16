import React from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { Event } from 'react-big-calendar';
import { formatDate, turnUsersIntoSelectOptions } from '../hooks/hooks';
import { useUsers } from './HomeWrapper';
import UserSelect from './UserSelect';

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selected: Event;
};

function EventModal({ isOpen, onClose, selected }: EventModalProps) {
  const users = useUsers();
  const options = turnUsersIntoSelectOptions(users);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${selected?.title} Shift`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold">
            {selected.start && selected.end
              ? `${formatDate(
                  selected.start,
                  DateTime.TIME_SIMPLE
                )}-${formatDate(selected.end, DateTime.TIME_SIMPLE)}`
              : 'NULL'}
          </Text>
          <Stack>
            <Flex>
              <Text>Primary</Text>
              <Spacer />
              <UserSelect
                event={selected}
                userRole="primary"
                defaultValue={selected.resource.primary}
                options={options}
              />
            </Flex>
            <Flex>
              <Text>Backup</Text>
              <Spacer />
              <UserSelect
                event={selected}
                userRole="backup"
                defaultValue={selected.resource.backup}
                options={options}
              />
            </Flex>
            <Flex>
              <Text>2nd Backup</Text>
              <Spacer />
              <UserSelect
                event={selected}
                userRole="sBackup"
                defaultValue={selected.resource.sBackup}
                options={options}
              />
            </Flex>
            <Flex>
              <Text>Accompaniment</Text>
              <Spacer />
              <UserSelect
                event={selected}
                userRole="accompaniment"
                defaultValue={selected.resource.accompaniment}
                options={options}
              />
            </Flex>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EventModal;
