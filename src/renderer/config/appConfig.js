import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDJhMprSTRc92JQ5LkkDnqrC_LjygA7dck',
  authDomain: 'one-ring-11da5.firebaseapp.com',
  projectId: 'one-ring-11da5',
  storageBucket: 'one-ring-11da5.appspot.com',
  messagingSenderId: '673335019652',
  appId: '1:673335019652:web:7126eb2dfc83859c495ad1',
  measurementId: 'G-3GQG336E5Y',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
