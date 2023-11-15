import firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const signOut = () => {
  firebase.auth().signOut();
};
