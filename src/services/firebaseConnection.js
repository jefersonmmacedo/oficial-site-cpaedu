import { initializeApp} from 'firebase/app';
import { getFirestore  } from 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyDlE7gknXb5t8HhoFscM5XvQuhbE5-liPI",
    authDomain: "cpaeducacao-saquarema.firebaseapp.com",
    projectId: "cpaeducacao-saquarema",
    storageBucket: "cpaeducacao-saquarema.appspot.com",
    messagingSenderId: "521078791413",
    appId: "1:521078791413:web:4fcde605fc81ef7329f9bc"
  };
  
// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);
export default getFirestore(app);