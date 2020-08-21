importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();