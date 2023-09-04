import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

function FirebaseData() {
  const config = {
    apiKey: "AIzaSyBcnazkEmMxwliLki1IA_A0YtVWoqCTH_c",
    authDomain: "smart-bazar-3f50a.firebaseapp.com",
    databaseURL: "https://smart-bazar-3f50a-default-rtdb.firebaseio.com",
    projectId: "smart-bazar-3f50a",
    storageBucket: "smart-bazar-3f50a.appspot.com",
    messagingSenderId: "972888386915",
    appId: "1:972888386915:web:cdd276397114778bd33756",
    measurementId: "G-ZNWPZ74BLG"
  };
  const app = initializeApp(config);
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  return{ auth ,db};
}
export default FirebaseData;