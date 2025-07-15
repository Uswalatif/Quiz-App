import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9pN-GKsslCVm90S40m_LP_El_T3MP1Sc",
  authDomain: "quiz-app-8036c.firebaseapp.com",
  projectId: "quiz-app-8036c",
  storageBucket: "quiz-app-8036c.appspot.com", // <-- corrected here
  messagingSenderId: "693664470132",
  appId: "1:693664470132:web:46ce45864f50d900466d21",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
