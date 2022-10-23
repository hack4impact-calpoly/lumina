import { Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Announcement } from '../types/Announcement';
import { Card } from './Card';
import moment from 'moment';

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

export default AnnouncementCard;
