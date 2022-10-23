import { Button, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import HomePage from '../components/HomePage';
import { db } from '../firebaseApp';
import { useNavigate } from 'react-router-dom';

type Props = {};

const CreateAnnouncement = (props: Props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const createAnnouncement = async () => {
    if (title.length > 0 && body.length > 0) {
      await addDoc(collection(db, "announcements"), {
        title: title,
        body: body,
        timestamp: new Date()
      });
      navigate('/home/dashboard');
    }
  };

  return (
    <HomePage>
      <VStack h="100%" spacing={5} textAlign='start'>
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
        <Button w="100%" colorScheme="teal" onClick={createAnnouncement}>
          Create
        </Button>
      </VStack>
    </HomePage>
  );
};

export default CreateAnnouncement;
