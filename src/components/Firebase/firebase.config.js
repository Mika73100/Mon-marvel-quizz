//Dans ce fichier je copie colle le lien direct avec la firebase de mon projet

// ici j'import auth pour qu'il soit reconnut dans mon fichier
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKETREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

//ici j'export l'autentification avec auth mais aussi j export app
export const auth = app.auth();
export default app;