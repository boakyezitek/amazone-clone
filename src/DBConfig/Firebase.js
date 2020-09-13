import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC3Tt9xKmoCM_RxfjcwyE565TdpyQdOsAk",
    authDomain: "e-clone-9c4f5.firebaseapp.com",
    databaseURL: "https://e-clone-9c4f5.firebaseio.com",
    projectId: "e-clone-9c4f5",
    storageBucket: "e-clone-9c4f5.appspot.com",
    messagingSenderId: "787234991271",
    appId: "1:787234991271:web:c3d7e4bf565d6a670e7f82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};