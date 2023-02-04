import { Announcement } from '../types';
import getTTL from './getTTL';

const sortAnnouncements = (announcements: Announcement[]) =>
  announcements.sort(
    (objA, objB) => objB.timestamp.seconds - objA.timestamp.seconds
  );

const getAnnouncements = async (
  setAnnouncements: React.Dispatch<React.SetStateAction<Announcement[]>>
) => {
  const allAnnouncements: Announcement[] = [];
  localStorage.setItem(
    'announcements',
    JSON.stringify(sortAnnouncements(allAnnouncements))
  );
  localStorage.setItem('announcementsTTL', JSON.stringify(getTTL(30)));
  setAnnouncements(sortAnnouncements(allAnnouncements));
};

export default getAnnouncements;
