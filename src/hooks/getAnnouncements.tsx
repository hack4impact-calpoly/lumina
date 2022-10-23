import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseApp';
import { Announcement } from '../types/Announcement';
import { getTTL } from './getTTL';

const sortAnnouncements = (announcements: Announcement[]) => {
  return announcements.sort(
    (objA, objB) => Number(objB.timestamp) - Number(objA.timestamp)
  );
};

export const getAnnouncements = async (
  setAnnouncements: React.Dispatch<React.SetStateAction<Announcement[]>>
) => {
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
    JSON.stringify(sortAnnouncements(allAnnouncements))
  );
  localStorage.setItem('announcementsTTL', JSON.stringify(getTTL(30)));
  setAnnouncements(sortAnnouncements(allAnnouncements));
};
