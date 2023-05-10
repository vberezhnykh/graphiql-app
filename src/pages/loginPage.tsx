import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForm';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';

const LoginPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/main');
  }, [user, loading]);

  return (
    <>
      <header>
        Not a member? <Link to={'/sign-up'}>Sign Up now</Link>
      </header>
      <ToastContainer />
      <main className="main--flex">
        <LoginForm />
      </main>
      <footer>Footer Template</footer>
    </>
  );
};

export default LoginPage;
