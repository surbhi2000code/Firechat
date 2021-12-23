import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDi3iQgQkxNGuq57lBvrrdpxJdZ9A9xVVs",
  authDomain: "https://firechat1.vercel.app/",
  projectId: "firechat-d8f73",
  storageBucket: "firechat-d8f73.appspot.com",
  messagingSenderId: "832502126871",
  appId: "1:832502126871:web:7cdcd0246be43c4b58bf52",
  measurementId: "G-JHKM34WS6Z"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export{ db,auth,firebaseApp }
