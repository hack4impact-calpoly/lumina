import { Select, GroupBase, ChakraStylesConfig } from 'chakra-react-select';
import { Event } from 'react-big-calendar';
import React from 'react';
import { UserOption } from '../types';
import { reassign } from './HomeWrapper';

type Props = {
  event: Event;
  userRole: string;
  options: UserOption[];
  defaultValue: UserOption | undefined;
};

function UserSelect({ event, userRole, options, defaultValue }: Props) {
  const chakraStyles: ChakraStylesConfig<UserOption> = {
    container: (provided) => ({
      ...provided,
      w: '60%',
    }),
  };
  return (
    <Select<UserOption, true, GroupBase<UserOption>>
      chakraStyles={chakraStyles}
      options={options}
      defaultValue={defaultValue}
      onChange={(e: any) => reassign(event, userRole, e)}
    />
  );
}

export default UserSelect;
