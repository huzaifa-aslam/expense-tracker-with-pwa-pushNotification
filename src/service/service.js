import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCQdKRICcx3V_2cnjNjHmRTOXCMn2D4s-g",
    authDomain: "expense-tracker-pwa-notifi.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-notifi.firebaseio.com",
    projectId: "expense-tracker-pwa-notifi",
    storageBucket: "expense-tracker-pwa-notifi.appspot.com",
    messagingSenderId: "195620625388",
    appId: "1:195620625388:web:54ac2e110cae82ffa87ec9",
    measurementId: "G-YCSYHVPMJF"
  };

  firebase.initializeApp(firebaseConfig)
  let messaging=  firebase.messaging();


  export function Services(){
    Notification.requestPermission().then((permission) => {
        if(permission ==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {

                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);

              });
        }
    });
}