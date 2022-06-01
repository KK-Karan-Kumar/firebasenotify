// importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js');
// // Your web app's Firebase configuration
// console.log("registering service worker");
//     var firebaseConfig = {
//         apiKey: "AIzaSyBBbt9zXmEeLCq-TltWp1tQDTfTLt_-k3Y",
//         authDomain: "food-order-fc928.firebaseapp.com",
//         projectId: "food-order-fc928",
//         storageBucket: "food-order-fc928.appspot.com",
//         messagingSenderId: "697918094802",
//         appId: "1:697918094802:web:cc189790701fd1e6021c0b",
//         measurementId: "G-F5R903JGC3"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BLERoCHPqUbn8vkcvwohreZVt4NSFz5LUFOHCPBV9jlrBiW-8lOu2-cdH22jeayuL_joZInlFzOvKI1LPucQxEw");
// messaging.onBackgroundMessage(function(payload) {
// const notificationTitle = payload.data.title;
// const notificationOptions = {
// body: payload.data.message,
// icon:'PATH TO ICON IF ANY',
// data: { url:payload.data.onClick }, //the url which we gonna use later
// };
// return self.registration.showNotification(notificationTitle,notificationOptions);
// });
// //Code for adding event on click of notification
// self.addEventListener('notificationclick', function(event) {
// let url = event.notification.data.url;
// event.notification.close(); 
// event.waitUntil(
// clients.matchAll({type: 'window'}).then( windowClients => {
// // Check if there is already a window/tab open with the target URL
// for (var i = 0; i < windowClients.length; i++) {
// var client = windowClients[i];
// // If so, just focus it.
// if (client.url === url && 'focus' in client) {
// return client.focus();
// }
// }
// // If not, then open the target URL in a new window/tab.
// if (clients.openWindow) {
// return clients.openWindow(url);
// }
// })
// );
// });