/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCTvNJG5HtKTuyCwxnn5VcXj2Z2XcmuPwQ",
  authDomain: "friendlychat-e8553.firebaseapp.com",
  projectId: "friendlychat-e8553",
  storageBucket: "friendlychat-e8553.appspot.com",
  messagingSenderId: "199868207970",
  appId: "1:199868207970:web:383a518316aaf8a1bc923b"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}