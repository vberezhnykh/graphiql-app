import { FirebaseError, initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: 'AIzaSyAWTOjh8H0QNWom3TwtXEh2nmVba0vAszY',
  authDomain: 'react-final-task.firebaseapp.com',
  projectId: 'react-final-task',
  storageBucket: 'react-final-task.appspot.com',
  messagingSenderId: '1033213749742',
  appId: '1:1033213749742:web:27ac3e0871bb9d272986ff',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    console.error(error);
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  redirectToMainPage: () => void
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    redirectToMainPage();
  } catch (error) {
    if (!(error instanceof FirebaseError)) return;
    if (error.code === 'auth/email-already-in-use') {
      toast('Email already in use');
    }
  }
};

export const sendPasswordResetOnEmail = async (email: string) => {
  try {
    sendPasswordResetEmail(auth, email);
    alert('reset link send');
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  signOut(auth);
};
