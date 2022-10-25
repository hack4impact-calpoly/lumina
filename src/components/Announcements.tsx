import { Flex, HStack, Skeleton, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineEdit,
  AiOutlineReload,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Announcement } from '../types';
import { getAnnouncements } from '../hooks/getAnnouncements';
import TextIcon from './TextIcon';
import TooltipIcon from './TooltipIcon';
import InfoCard from './InfoCard';

const Announcements = () => {
  const localAnnouncements = localStorage.getItem('announcements');
  const localAnnouncementsTTL = localStorage.getItem('announcementsTTL');

  const [announcements, setAnnouncements] = useState<Announcement[]>(
    localAnnouncements != null &&
      localAnnouncementsTTL != null &&
      Date.parse(JSON.parse(localAnnouncementsTTL)) > new Date().getTime()
      ? JSON.parse(localAnnouncements)
      : []
  );
  const [maxAnnouncements, setMaxAnnouncements] = useState(3);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  const getAnnouncementsWrapper = () => {
    setLoaded(false);
    getAnnouncements(setAnnouncements).then((res) => setLoaded(true));
  };

  useEffect(() => {
    if (announcements.length <= 0) {
      getAnnouncements(setAnnouncements);
    }
    setLoaded(true);
  }, []);

  return (
    <Flex flexDir="column">
      <HStack>
        <Text fontWeight="bold" fontSize="4xl" mr={3}>
          Announcements
        </Text>
        <TooltipIcon
          label="Reload Announcements"
          fontSize="4xl"
          icon={AiOutlineReload}
          onClick={getAnnouncementsWrapper}
        />
        <TooltipIcon
          label="Create Announcement"
          fontSize="4xl"
          icon={AiOutlineEdit}
          onClick={() => navigate('create-announcement')}
        />
      </HStack>
      <VStack w="100%">
        {announcements.length <= 0 ? (
          <>
            <Skeleton w="100%" h="15rem"></Skeleton>
            <Skeleton w="100%" h="15rem"></Skeleton>
            <Skeleton w="100%" h="15rem"></Skeleton>
          </>
        ) : (
          <></>
        )}
        {announcements.map((announcement, index) => {
          if (index < maxAnnouncements) {
            const annoucementDate = new Date(
              announcement.timestamp.seconds * 1000
            );
            return (
              <Skeleton w="100%" isLoaded={loaded}>
                <InfoCard
                  title={announcement.title}
                  body={announcement.body}
                  date={annoucementDate}
                  gridRowUnits={4}
                  onClick={() =>
                    navigate(`/home/dashboard/annoucement/${announcement.id}`)
                  }
                  cursor="pointer"
                />
              </Skeleton>
            );
          }
          return <></>;
        })}
        {announcements.length <= maxAnnouncements ? (
          <TextIcon
            icon={AiOutlineArrowUp}
            fontSize="2xl"
            text="Show less"
            onClick={() => setMaxAnnouncements(3)}
            isLink
          />
        ) : (
          <TextIcon
            icon={AiOutlineArrowDown}
            fontSize="2xl"
            text="View all announcements"
            onClick={() => setMaxAnnouncements(announcements.length)}
            isLink
          />
        )}
      </VStack>
    </Flex>
  );
};

export default Announcements;
