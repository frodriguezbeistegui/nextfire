import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC-gcA0zRGU8pWgH4Qhn05jWsJq_RI8f3M',
  authDomain: 'nextfire-app-fb2e0.firebaseapp.com',
  projectId: 'nextfire-app-fb2e0',
  storageBucket: 'nextfire-app-fb2e0.appspot.com',
  messagingSenderId: '202971483938',
  appId: '1:202971483938:web:1c37b4b9e05339f9e51f7b',
  measurementId: 'G-4LSL7BR08P',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;
// Storage exports
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
