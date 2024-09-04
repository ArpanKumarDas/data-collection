import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDUDE5Nch_sJ4gbZyLTtOogkciHQ6N-IqE",
//     authDomain: "anxiety-data.firebaseapp.com",
//     projectId: "anxiety-data",
//     storageBucket: "anxiety-data.appspot.com",
//     messagingSenderId: "509174167974",
//     appId: "1:509174167974:web:855f9b8f5bf1753fd3b767",
//     measurementId: "G-WCNNM5681C"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD2isVvcKFf615aGbSG3Z8lWmBXk0qS42U",
  authDomain: "data-collection-f223e.firebaseapp.com",
  projectId: "data-collection-f223e",
  storageBucket: "data-collection-f223e.appspot.com",
  messagingSenderId: "1094654029567",
  appId: "1:1094654029567:web:92f423884a078e77bae6ca",
  measurementId: "G-YT8LDR96F8",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
