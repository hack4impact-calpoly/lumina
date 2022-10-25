import {
  Button,
  Card,
  CardBody,
  Flex,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
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
import { formatDate } from '../hooks/hooks';
import { Message, MessageFilter, MessageType } from '../types';
import SelectTag from './SelectTag';

const messages = fakeMessages(20).sort(
  (objA, objB) => objB.timestamp.seconds - objA.timestamp.seconds
);

const filterTags: MessageFilter[] = [
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

function QuickActionApproveDeny() {
  return (
    <VStack w="100%" h="100%">
      <Tooltip hasArrow label="Approve">
        <Button h="75%" colorScheme="green" w="100%">
          <Icon as={AiOutlineCheck} h="50%" w="50%" />
        </Button>
      </Tooltip>
      <Tooltip hasArrow label="Deny">
        <Button h="25%" colorScheme="red" w="100%">
          <Icon as={AiOutlineClose} h="50%" w="50%" />
        </Button>
      </Tooltip>
    </VStack>
  );
}

function QuickActionShiftView() {
  return (
    <VStack w="100%" h="100%">
      <Tooltip hasArrow label="View shift">
        <Button h="75%" colorScheme="green" w="100%">
          <Icon as={AiOutlineArrowRight} h="50%" w="50%" />
        </Button>
      </Tooltip>
      <Tooltip hasArrow label="Delete">
        <Button h="25%" colorScheme="gray" w="100%">
          <Icon as={AiOutlineDelete} h="50%" w="50%" />
        </Button>
      </Tooltip>
    </VStack>
  );
}

type MessageCardProps = {
  message: Message;
};

function MessageCard({ message }: MessageCardProps) {
  const messageDate = new Date(message.timestamp.seconds * 1000);
  const getTag = (messageType: MessageType): JSX.Element | null => {
    switch (messageType) {
      case MessageType.ShiftCancel:
        return <Tag colorScheme="red">Shift Cancel</Tag>;
      case MessageType.Approve:
        return <Tag colorScheme="orange">Approve</Tag>;
      case MessageType.ShiftChange:
        return <Tag colorScheme="orange">Shift Change</Tag>;
      case MessageType.ShiftSignUp:
        return <Tag colorScheme="blue">Shift Sign Up</Tag>;
      default:
        return null;
    }
  };

  const getRightElement = (messageType: MessageType): JSX.Element | null => {
    switch (messageType) {
      case MessageType.Approve:
        return <QuickActionApproveDeny />;
      case MessageType.ShiftSignUp:
      case MessageType.ShiftChange:
      case MessageType.ShiftCancel:
        return <QuickActionShiftView />;
      default:
        return null;
    }
  };
  return (
    <Card variant="elevated">
      <CardBody>
        <SimpleGrid columns={10}>
          <GridItem colSpan={9}>
            <Text fontWeight="semibold">{message.sender}</Text>
            <Text>{message.body}</Text>
            <VStack mt={2} alignItems="start" spacing={0}>
              <Text fontWeight="thin">{formatDate(messageDate)}</Text>
              {getTag(message.type)}
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>{getRightElement(message.type)}</GridItem>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}

function AdminMessages() {
  const [filter, setFilter] = useState<Record<string, boolean>>({
    APPROVE: false,
    SHIFT_CHANGE: false,
    SHIFT_CANCEL: false,
    SHIFT_SIGN_UP: false,
  });

  const updateFilter = (targetFilter: string) => {
    const localFilter = JSON.parse(JSON.stringify(filter));
    localFilter[targetFilter] = !localFilter[targetFilter];
    setFilter(localFilter);
  };

  const noFilter = () => {
    const filterKeys = Object.keys(filter);
    for (let i = 0; i < filterKeys.length; i++) {
      if (filter[filterKeys[i]]) {
        return false;
      }
    }
    return true;
  };

  return (
    <Flex flexDir="column" p={3}>
      <Text fontWeight="bold" textAlign="start" mb={3}>
        Messages
      </Text>
      <Text>Filter by</Text>
      <HStack mb={3}>
        {filterTags.map((filterTag) => (
          <SelectTag
            text={filterTag.name}
            color={filterTag.color}
            val={filter}
            targetVal={filterTag.targetVal}
            onClick={() => updateFilter(filterTag.targetVal)}
          />
        ))}
      </HStack>
      <VStack>
        {messages.map((message) => {
          if (noFilter() || filter[message.type]) {
            return <MessageCard message={message} />;
          }
          return null;
        })}
      </VStack>
    </Flex>
  );
}

export default AdminMessages;
