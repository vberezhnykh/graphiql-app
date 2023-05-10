import { useEffect } from 'react';
import Header from '../components/header';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../features/firebase';
import { User } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { saveUserName } from '../store/features/authSlice';

const HomePage = () => {
  const name = useAppSelector((store) => store.auth.userName);
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const fetchUserName = async (user: User) => {
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    const name = data.name;
    dispatch(saveUserName(name));
  };

  useEffect(() => {
    if (!user) return;
    fetchUserName(user);
  }),
    [user];

  return (
    <>
      <Header />
      <main className="main main--flex">{name ? `Hello, ${name}` : `Please login first.`}</main>
      <footer>Footer Template</footer>
    </>
  );
};

export default HomePage;
