import { useEffect } from 'react';
import Header from '../components/header';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../features/firebase';
import { User } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { saveUserName } from '../store/features/authSlice';
import { Spin } from 'antd';
import Footer from '../components/footer';

const HomePage = () => {
  const [user, isLoading] = useAuthState(auth);
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
  }, [user, isLoading]);

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large"></Spin>
      </main>
    );

  return (
    <>
      <Header />
      <main className="main main--flex main__home">
        <p>GraphiQL is a playground/IDE for graphQL requests.</p>
        <p>
          Made by Valentin Berezhnykh and Yan Chorny as a{' '}
          <a
            href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
            target="_blank"
            rel="noreferrer"
          >
            final task
          </a>{' '}
          on the{' '}
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            React course
          </a>{' '}
          organized by RSSchool.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
