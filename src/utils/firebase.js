import firebase from "firebase/app"
import "firebase/firestore"

// Don't steel my credentials :(
// They are kept just for demo purposes
const app = firebase.initializeApp({
    apiKey: "AIzaSyDPe3q9UmQPpq9KYtwACeeLaWywYY0ZJFE",
    authDomain: "meeting-6cf36.firebaseapp.com",
    projectId: "meeting-6cf36",
    storageBucket: "meeting-6cf36.appspot.com",
    messagingSenderId: "66211141181",
    appId: "1:66211141181:web:149f235b953f6f3c96bc54",
    measurementId: "G-ZPKYDZE8ND" 
});

const fireDB = app.firestore()
export const database = {
    reservations: fireDB.collection('reservations'),
    formatDoc: doc => {
        return { id: doc.id, ...doc.data() }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}


export default app