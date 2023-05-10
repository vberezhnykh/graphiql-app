import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../components/header';
import { auth } from '../features/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

const MainPage = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    if (!user) navigate('/');
  }, [user, isLoading]);

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large" />
      </main>
    );

  return (
    <>
      <Header />
      <main className="main--flex main">This is Main Page</main>
      <footer>Footer Template</footer>
    </>
  );
};

export default MainPage;
