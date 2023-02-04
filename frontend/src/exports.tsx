import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUser,
} from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { SidebarElement } from './types';

export const fake = () => true;

export const sidebarElements: SidebarElement[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    icon: AiOutlineHome,
  },
  {
    name: 'Calendar',
    url: '/home/calendar',
    icon: AiOutlineCalendar,
  },
  {
    name: 'Directory',
    url: '/home/directory',
    icon: IoIosPeople,
  },
  {
    name: 'Profile',
    url: '/home/profile',
    icon: AiOutlineUser,
  },
  {
    name: 'Admin',
    url: '/home/admin',
    icon: AiOutlineTeam,
  },
];
