import {
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Skeleton,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineEdit,
  AiOutlineReload,
  AiOutlineRight,
} from 'react-icons/ai';
import HomePage from '../components/HomePage';
import { User } from '../types/User';
import { useNavigate } from 'react-router-dom';
import { Announcement } from '../types/Announcement';
import { Card } from '../components/Card';
import moment from 'moment';
import { getAnnouncements } from '../hooks/getAnnouncements';
import TextIcon from '../components/TextIcon';

type Props = {
  user: User;
};

const Dashboard = ({ user }: Props) => {
  return (
    <HomePage>
      <Grid
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={1}
        h="100%"
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Heading size="4xl">{'Hi ' + user.firstName + '!'}</Heading>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Text fontWeight="bold" fontSize="4xl">
            Your next shifts
          </Text>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Announcements />
        </GridItem>
      </Grid>
    </HomePage>
  );
};

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
    setLoaded(false)
    getAnnouncements(setAnnouncements).then((res) => setLoaded(true));
  };

  useEffect(() => {
    if (announcements.length <= 0) {
      getAnnouncements(setAnnouncements);
    }
    setLoaded(true)
  }, []);

  return (
    <Flex flexDir="column">
      <HStack>
        <Text fontWeight="bold" fontSize="4xl" mr={3}>
          Announcements
        </Text>
        <Tooltip hasArrow label="Reload announcements">
          <span>
            <Icon
              fontSize="4xl"
              as={AiOutlineReload}
              cursor="pointer"
              onClick={getAnnouncementsWrapper}
              tabIndex={0}
            />
          </span>
        </Tooltip>
        <Tooltip hasArrow label="Create announcement">
          <span>
            <Icon
              fontSize="4xl"
              as={AiOutlineEdit}
              cursor="pointer"
              onClick={() => navigate('create-announcement')}
              tabIndex={0}
            />
          </span>
        </Tooltip>
      </HStack>
      <VStack w="100%">
        {announcements.map((announcement, index) => {
          if (index < maxAnnouncements) {
            return (
              <Skeleton w='100%' isLoaded={loaded}>
                <AnnouncementCard announcement={announcement} />
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

type AnnouncementCardProps = {
  announcement: Announcement;
};

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const navigate = useNavigate();

  const [announcementHover, setAnnouncementHover] = useState(false);
  const annoucementDate = new Date(announcement.timestamp.seconds * 1000);

  return (
    <Card
      w="100%"
      onMouseEnter={() => setAnnouncementHover(true)}
      onMouseLeave={() => setAnnouncementHover(false)}
      cursor="pointer"
      onClick={() => navigate(`/home/dashboard/annoucement/${announcement.id}`)}
      tabIndex={0}
    >
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={1}
        h="100%"
      >
        <GridItem rowSpan={1} colSpan={9}>
          <Text noOfLines={1} fontWeight="bold" fontSize="4xl">
            {announcement.title}
          </Text>
        </GridItem>
        <GridItem rowSpan={3} colSpan={1}>
          {announcementHover ? (
            <Icon as={AiOutlineRight} h="100%" w="100%" />
          ) : (
            <></>
          )}
        </GridItem>
        <GridItem rowSpan={2} colSpan={9}>
          <Text noOfLines={3}>{announcement.body}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={9}>
          <Text noOfLines={1} fontWeight="light">
            {moment(annoucementDate).format('lll')}
          </Text>
        </GridItem>
      </Grid>
    </Card>
  );
};

export default Dashboard;
