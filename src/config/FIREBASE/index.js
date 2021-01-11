import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCa_4dy6olpZmKdboICypMxlLKl3rNc1pU',
  authDomain: 'rn-crud-contact.firebaseapp.com',
  projectId: 'rn-crud-contact',
  storageBucket: 'rn-crud-contact.appspot.com',
  messagingSenderId: '830257795343',
  appId: '1:830257795343:web:eaf2c1302717cb3d9f6e7a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FIREBASE = firebase;

export default FIREBASE;
