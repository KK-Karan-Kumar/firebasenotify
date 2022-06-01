import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import regiserworker from './swregiser';


const firebaseConfig = {
  apiKey: "AIzaSyBBbt9zXmEeLCq-TltWp1tQDTfTLt_-k3Y",
  authDomain: "food-order-fc928.firebaseapp.com",
  projectId: "food-order-fc928",
  storageBucket: "food-order-fc928.appspot.com",
  messagingSenderId: "697918094802",
  appId: "1:697918094802:web:cc189790701fd1e6021c0b",
  measurementId: "G-F5R903JGC3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);


getToken(messaging, { vapidKey: 'BLERoCHPqUbn8vkcvwohreZVt4NSFz5LUFOHCPBV9jlrBiW-8lOu2-cdH22jeayuL_joZInlFzOvKI1LPucQxEw' }).then((currentToken) => {
  if (currentToken) {
   
    
    console.log(currentToken);
  } else {
    
    console.log('No registration token available. Request permission to generate one.');
 
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  
});


//get firebase send message
onMessage(messaging, function(payload) {
  console.log('Message received. ', payload);
  // ...
});

// onBackgroundMessage(messaging, function(payload) {
//   console.log('Message received in the background. ', payload);
//   // ...
// });








regiserworker();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
