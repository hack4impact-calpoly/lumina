// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCY9M3E8XnOKn3lc4uDk2U1pgYn5tUmS6s',
  authDomain: 'lumina-c00d0.firebaseapp.com',
  projectId: 'lumina-c00d0',
  storageBucket: 'lumina-c00d0.appspot.com',
  messagingSenderId: '564604027909',
  appId: '1:564604027909:web:a7150473cf2c4789ea486c',
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
