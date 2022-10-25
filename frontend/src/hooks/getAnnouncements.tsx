import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseApp';
import { Announcement } from '../types';
import getTTL from './getTTL';

const sortAnnouncements = (announcements: Announcement[]) =>
  announcements.sort(
    (objA, objB) => objB.timestamp.seconds - objA.timestamp.seconds
  );

const getAnnouncements = async (
  setAnnouncements: React.Dispatch<React.SetStateAction<Announcement[]>>
) => {
  const query = await getDocs(collection(db, 'announcements'));
  const allAnnouncements: Announcement[] = [];
  query.forEach((doc) => {
    const announcement = {
      id: doc.id,
      title: doc.data().title,
      body: doc.data().body,
      timestamp: doc.data().timestamp,
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

export default getAnnouncements;
