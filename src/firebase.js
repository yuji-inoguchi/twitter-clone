import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcv_iUPhTRbRCfbsB8nZ7RCy1-KWKPq9w",
  authDomain: "twitter-clone-5198d.firebaseapp.com",
  projectId: "twitter-clone-5198d",
  storageBucket: "twitter-clone-5198d.appspot.com",
  messagingSenderId: "372098571421",
  appId: "1:372098571421:web:09b9ca089fa6870f694874",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
