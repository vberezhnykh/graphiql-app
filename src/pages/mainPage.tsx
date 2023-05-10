import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../components/header';
import { auth } from '../features/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);
  return (
    <>
      <Header />
      <main className="main--flex main">This is Main Page</main>
      <footer>Footer Template</footer>
    </>
  );
};

export default MainPage;
