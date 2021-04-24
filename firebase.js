import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAEeSAS09UrO659mmj59b-grHF1AXJ8RLk",
    authDomain: "whatsapp-nextjs-8adc3.firebaseapp.com",
    projectId: "whatsapp-nextjs-8adc3",
    storageBucket: "whatsapp-nextjs-8adc3.appspot.com",
    messagingSenderId: "55297246717",
    appId: "1:55297246717:web:2b94d5869d99fae63b0594"
  };

const app =!firebase.apps.length 
   ? firebase.initializeApp(firebaseConfig)
   : firebase.app();

   const db = app.firestore();
   const auth = app.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export {db, auth, provider};