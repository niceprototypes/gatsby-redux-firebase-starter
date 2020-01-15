import firebase from 'firebase/app'

class Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: "API_KEY",
      authDomain: "AUTH_DOMAIN",
      databaseURL: "DATABASE_URL",
      projectId: "PROJECT_ID",
      storageBucket: "STORAGE_BUCKET",
      messagingSenderId: "MESSAGE_SENDER_ID"
    })
  }
}

export {Firebase}
