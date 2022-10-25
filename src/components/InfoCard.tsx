import { GridItem, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Card } from './Card';
import EZGrid from './EZGrid';
import { AiOutlineRight } from 'react-icons/ai';
import moment from 'moment';

type Props = {
  title: string;
  body: string;
  date: Date;
  tag?: JSX.Element;
  rightElement?: JSX.Element;
  gridRowUnits?: number;
  gridColUnits?: number;
  gridMaxH?: string;

  [x: string]: any;
};

const InfoCard = ({
  title,
  body,
  date,
  tag,
  rightElement,
  gridRowUnits,
  gridColUnits,
  gridMaxH,
  ...rest
}: Props) => {
  const [hover, setHover] = useState(false);

  const rowUnits = gridRowUnits ? gridRowUnits : 7;
  const colUnits = gridColUnits ? gridColUnits : 10;

  const calcBodyRowUnits = () => {
    return tag ? rowUnits - 3 : rowUnits - 2;
  };

  return (
    <Card
      w="100%"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
      {...rest}
    >
      <EZGrid
        rowUnits={rowUnits}
        colUnits={colUnits}
        maxH={gridMaxH ? gridMaxH : '100%'}
      >
        <GridItem rowSpan={1} colSpan={9}>
          <Text noOfLines={1} fontWeight="bold" fontSize="4xl">
            {title}
          </Text>
        </GridItem>
        <GridItem rowSpan={rowUnits} colSpan={1}>
          {hover ? (
            rightElement ? (
              rightElement
            ) : (
              <Icon as={AiOutlineRight} h="100%" w="100%" />
            )
          ) : (
            <></>
          )}
        </GridItem>
        <GridItem rowSpan={calcBodyRowUnits()} colSpan={9}>
          <Text noOfLines={3} lineHeight={6}>{body}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={9}>
          <Text noOfLines={1} fontWeight="light">
            {moment(date).format('lll')}
          </Text>
        </GridItem>
        {tag ? (
          <GridItem rowSpan={1} colSpan={9}>
            {tag}
          </GridItem>
        ) : (
          <></>
        )}
      </EZGrid>
    </Card>
  );
};

export default InfoCard;
