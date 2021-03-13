import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAds2HBDfPctplAPS5N9xH35tU7ipT_uEU",
        authDomain: "drink-6a3d6.firebaseapp.com",
        databaseURL: "https://drink-6a3d6-default-rtdb.firebaseio.com",
        projectId: "drink-6a3d6",
        storageBucket: "drink-6a3d6.appspot.com",
        messagingSenderId: "83177757679",
        appId: "1:83177757679:web:f0afd3f80d974fc194741a",
        measurementId: "G-T9J4MVK3VP"
    })
};
firebase.auth().languageCode = 'jp';
export default firebase;