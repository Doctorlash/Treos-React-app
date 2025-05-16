
import { initializeApp } from 'firebase/app';

   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';
   import { getAnalytics } from "firebase/analytics";
   import { getStorage } from "firebase/storage";

   const firebaseConfig = {
  apiKey: "AIzaSyBaxCHSWe2_0RyeGT5lL2psX2Lomiar8w4",
  authDomain: "sageconsolidated-475a1.firebaseapp.com",
  projectId: "sageconsolidated-475a1",
  storageBucket: "sageconsolidated-475a1.firebasestorage.app",
  messagingSenderId: "318176402169",
  appId: "1:318176402169:web:7088eee95f35205e162028",
  measurementId: "G-YYLZ29P8BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   const auth = getAuth(app);
   const db = getFirestore(app);
   const storage = getStorage(app);

   export { auth, db, storage };
