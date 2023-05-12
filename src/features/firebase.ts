import { FirebaseError, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
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
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    console.error(error);
    if (!(error instanceof FirebaseError)) return;
    if (error.code === 'auth/wrong-password') toast('Invalid password');
    if (error.code === 'auth/user-not-found') toast('User not found');
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
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
