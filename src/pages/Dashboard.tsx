import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineRight } from 'react-icons/ai';
import HomePage from '../components/HomePage';
import { User } from '../types/User';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseApp';
import { Announcement } from '../types/Announcement';
import { Card } from '../components/Card';
import moment from 'moment';

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

  const navigate = useNavigate();

  useEffect(() => {
    const getAnnouncements = async () => {
      if (announcements.length <= 0) {
        const query = await getDocs(collection(db, 'announcements'));
        let allAnnouncements: Announcement[] = [];
        query.forEach((doc) => {
          const announcement = {
            id: doc.id,
            title: doc.data()['title'],
            body: doc.data()['body'],
            timestamp: doc.data()['timestamp'],
          };
          allAnnouncements.push(announcement);
        });
        localStorage.setItem(
          'announcements',
          JSON.stringify(
            allAnnouncements.sort(
              (objA, objB) => Number(objB.timestamp) - Number(objA.timestamp)
            )
          )
        );
        localStorage.setItem(
          'announcementsTTL',
          JSON.stringify(new Date(new Date().getTime() + 5 * 60000))
        );
        setAnnouncements(
          allAnnouncements.sort(
            (objA, objB) => Number(objB.timestamp) - Number(objA.timestamp)
          )
        );
      }
    };
    getAnnouncements();
    return () => {};
  }, []);

  return (
    <Flex flexDir="column">
      <Flex alignItems="center">
        <Text fontWeight="bold" fontSize="4xl" mr={3}>
          Announcements
        </Text>
        <Tooltip hasArrow label="Create announcement">
          <span>
            <Icon
              fontSize="4xl"
              as={AiOutlineEdit}
              cursor="pointer"
              onClick={() => navigate('create-announcement')}
            />
          </span>
        </Tooltip>
      </Flex>
      <VStack w="100%">
        {announcements.map((announcement: Announcement) => {
          return <AnnouncementCard announcement={announcement} />;
        })}
      </VStack>
    </Flex>
  );
};

type AnnouncementCardProps = {
  announcement: Announcement;
};

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const navigate = useNavigate()

  const [announcementHover, setAnnouncementHover] = useState(false);
  const annoucementDate = new Date(announcement.timestamp.seconds * 1000);

  return (
    <Card
      w="100%"
      onMouseEnter={() => setAnnouncementHover(true)}
      onMouseLeave={() => setAnnouncementHover(false)}
      cursor="pointer"
      onClick={() => navigate(`/home/dashboard/annoucement/${announcement.id}`)}
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
