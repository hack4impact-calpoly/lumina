import {
  Button,
  Heading,
  Icon,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import HomePage from '../components/HomePage';

function CreateAnnouncement() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const createAnnouncement = async () => {
    if (title.length > 0 && body.length > 0) {
      console.log(setLoading);
      console.log('createAnnouncement');
    }
  };

  return (
    <HomePage>
      <VStack h="100%" spacing={5} textAlign="start">
        <Button alignSelf="start" onClick={() => navigate('/home/dashboard')}>
          <Icon as={AiOutlineArrowLeft} />
        </Button>
        <Heading size="4xl">Create Announcement</Heading>
        <Input
          fontWeight="bold"
          fontSize="48px"
          h="10%"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          fontSize="24px"
          h="100%"
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <Button
          w="100%"
          colorScheme="teal"
          onClick={createAnnouncement}
          isLoading={loading}
        >
          Create
        </Button>
      </VStack>
    </HomePage>
  );
}

export default CreateAnnouncement;
