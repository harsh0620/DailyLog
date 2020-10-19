import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzpqA85C1mjvBg_UjiIMMF6a-FsYCbLjE",
    authDomain: "dailylog-a074e.firebaseapp.com",
    databaseURL: "https://dailylog-a074e.firebaseio.com",
    projectId: "dailylog-a074e",
    storageBucket: "dailylog-a074e.appspot.com",
    messagingSenderId: "30162769919",
    appId: "1:30162769919:web:a2f06bc22cd5b9a2e4f9ca",
    measurementId: "G-YSBF7ZW46P"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const data =firebaseApp.firestore();

  export default data;