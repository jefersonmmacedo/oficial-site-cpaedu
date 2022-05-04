import { initializeApp} from 'firebase/app';
import { getStorage } from 'firebase/storage';
import 'firebase/compat/firestore';

let firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_APPID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
  apiKey: "AIzaSyDlE7gknXb5t8HhoFscM5XvQuhbE5-liPI",
  authDomain: "cpaeducacao-saquarema.firebaseapp.com",
  projectId: "cpaeducacao-saquarema",
  storageBucket: "cpaeducacao-saquarema.appspot.com",
  messagingSenderId: "521078791413",
  appId: "1:521078791413:web:4fcde605fc81ef7329f9bc"
  };
  
// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);