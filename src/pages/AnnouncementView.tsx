import { Button, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { Announcement } from '../types/Announcement';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const AnnouncementView = () => {
  const navigate = useNavigate();

  const localAnnouncements = localStorage.getItem('announcements');
  const announcements: Announcement[] =
    localAnnouncements != null ? JSON.parse(localAnnouncements) : [];
  const { annoucementId } = useParams();

  function getAnnouncement(): Announcement {
    const retAnnouncement = announcements.find(
      (announcement) => announcement.id === annoucementId
    );
    if (retAnnouncement) return retAnnouncement;
    return {
      id: annoucementId ? annoucementId : '',
      title: '',
      body: '',
      timestamp: {
        seconds: 0,
        nanoseconds: 0,
      },
    };
  }
  const currAnnouncement = getAnnouncement();

  return (
    <HomePage>
      <VStack alignItems="start">
        <Button onClick={() => navigate('/home/dashboard')}>
          <Icon as={AiOutlineArrowLeft} />
        </Button>
        <Heading w="100%" textAlign="center" fontSize="6xl">
          {currAnnouncement.title}
        </Heading>
        <Text>{currAnnouncement.body}</Text>
      </VStack>
    </HomePage>
  );
};

export default AnnouncementView;
