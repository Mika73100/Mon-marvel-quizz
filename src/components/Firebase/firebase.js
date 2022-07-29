import Firebase from 'firebase/app';


//ici je colle le lien de ma firebase donner sur le site web 
const firebaseConfig = {
    apiKey: "AIzaSyAuUUazxexMNoS78mZBwk_GDTwaiSu9P3s",
    authDomain: "mika-quiz.firebaseapp.com",
    projectId: "mika-quiz",
    storageBucket: "mika-quiz.appspot.com",
    messagingSenderId: "409229172853",
    appId: "1:409229172853:web:153fa6553cb3ef7fc3983c"
    };


        const app = {
            declarations: [AppComponent],
            imports: [
            BrowserModule.initializeApp(firebaseConfig),
        ]}
    


export default Firebase;