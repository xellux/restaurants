import firebase from 'firebase/app'
import 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyBydtqsQtkzy1tr5F4q5kkORCkbDx7Kmeo",
    authDomain: "restaurants-3efea.firebaseapp.com",
    projectId: "restaurants-3efea",
    storageBucket: "restaurants-3efea.appspot.com",
    messagingSenderId: "877564987242",
    appId: "1:877564987242:web:f03ac6f057c0f24eb34713"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);