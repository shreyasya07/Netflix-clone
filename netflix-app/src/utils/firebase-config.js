
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD525It5XZ5Gi8_T6XaHPxT_9fd6k22Wic",
  authDomain: "react-netflix-clone-511d8.firebaseapp.com",
  projectId: "react-netflix-clone-511d8",
  storageBucket: "react-netflix-clone-511d8.appspot.com",
  messagingSenderId: "172395477898",
  appId: "1:172395477898:web:c413e08d9075b275fea673",
  measurementId: "G-710G2HNFQ3"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);