import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyAds2HBDfPctplAPS5N9xH35tU7ipT_uEU',
        authDomain: process.env.FIREBASE_AuthDomain,
        databaseURL: process.env.FIREBASE_DatabaseURL,
        projectId: process.env.FIREBASE_ProjectID,
        storageBucket: process.env.FIREBASE_StorageBucket,
        messagingSenderId: process.env.FIREBASE_MessagingSenderID,
        appId: process.env.FIREBASE_AppID,
        measurementId: process.env.FIREBASE_MeasurementID
    })
};
export default firebase;