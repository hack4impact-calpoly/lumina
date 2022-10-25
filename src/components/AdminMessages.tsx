import {
  Button,
  Flex,
  HStack,
  Icon,
  Tag,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
} from 'react-icons/ai';
import { fakeMessages } from '../hooks/fake';
import { MessageFilter, MessageType } from '../types';
import InfoCard from './InfoCard';
import SelectTag from './SelectTag';

const messages = fakeMessages(20).sort(
  (objA, objB) => objB.timestamp.seconds - objA.timestamp.seconds
);

const filterTags: MessageFilter[] = [
  {
    name: 'All',
    color: 'gray',
    targetVal: null,
  },
  {
    name: 'Shift Cancel',
    color: 'red',
    targetVal: MessageType.ShiftCancel,
  },
  {
    name: 'Shift Change',
    color: 'orange',
    targetVal: MessageType.ShiftChange,
  },
  {
    name: 'Approve',
    color: 'orange',
    targetVal: MessageType.Approve,
  },
  {
    name: 'Shift Sign Up',
    color: 'blue',
    targetVal: MessageType.ShiftSignUp,
  },
];

type Props = {};

const AdminMessages = (props: Props) => {
  const [filter, setFilter] = useState<MessageType | null>(null);

  const getTag = (messageType: MessageType): JSX.Element => {
    switch (messageType) {
      case MessageType.ShiftCancel:
        return <Tag colorScheme="red">Shift Cancel</Tag>;
      case MessageType.Approve:
        return <Tag colorScheme="orange">Approve</Tag>;
      case MessageType.ShiftChange:
        return <Tag colorScheme="orange">Shift Change</Tag>;
      case MessageType.ShiftSignUp:
        return <Tag colorScheme="blue">Shift Sign Up</Tag>;
    }
  };

  const getRightElement = (messageType: MessageType): JSX.Element => {
    switch (messageType) {
      case MessageType.Approve:
        return <QuickActionApproveDeny />;
      case MessageType.ShiftSignUp:
      case MessageType.ShiftChange:
      case MessageType.ShiftCancel:
        return <QuickActionShiftView />;
    }
  };

  return (
    <Flex flexDir="column" p={3}>
      <Text fontWeight="bold" textAlign="start" mb={3}>
        Messages
      </Text>
      <Text>Filter by</Text>
      <HStack mb={3}>
        {filterTags.map((filterTag) => {
          return (
            <SelectTag
              text={filterTag.name}
              color={filterTag.color}
              val={filter}
              targetVal={filterTag.targetVal}
              onClick={() => setFilter(filterTag.targetVal)}
            />
          );
        })}
      </HStack>
      <VStack>
        {messages.map((message) => {
          const messageDate = new Date(message.timestamp.seconds * 1000);
          if (filter !== null) {
            if (message.type === filter) {
              return (
                <InfoCard
                  title={message.sender}
                  body={message.body}
                  date={messageDate}
                  tag={getTag(message.type)}
                  gridMaxH="200px"
                  rightElement={getRightElement(message.type)}
                />
              );
            }
            return <></>;
          }
          return (
            <InfoCard
              title={message.sender}
              body={message.body}
              date={messageDate}
              tag={getTag(message.type)}
              gridMaxH="200px"
              rightElement={getRightElement(message.type)}
            />
          );
        })}
      </VStack>
    </Flex>
  );
};

const QuickActionApproveDeny = () => {
  return (
    <VStack w="100%" h="100%">
      <Tooltip hasArrow label="Approve">
        <Button h="50%" colorScheme="green" w="100%">
          <Icon as={AiOutlineCheck} h="50%" w="50%" />
        </Button>
      </Tooltip>
      <Tooltip hasArrow label="Deny">
        <Button h="50%" colorScheme="red" w="100%">
          <Icon as={AiOutlineClose} h="50%" w="50%" />
        </Button>
      </Tooltip>
    </VStack>
  );
};

const QuickActionShiftView = () => {
  return (
    <VStack w="100%" h="100%">
      <Tooltip hasArrow label="View shift">
        <Button h="50%" colorScheme="green" w="100%">
          <Icon as={AiOutlineArrowRight} h="50%" w="50%" />
        </Button>
      </Tooltip>
      <Tooltip hasArrow label="Delete">
        <Button h="50%" colorScheme="gray" w="100%">
          <Icon as={AiOutlineDelete} h="50%" w="50%" />
        </Button>
      </Tooltip>
    </VStack>
  );
};

export default AdminMessages;
