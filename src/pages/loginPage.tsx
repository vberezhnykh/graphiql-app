import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForm';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';
import { Spin } from 'antd';
import Footer from '../components/footer';

const Login = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    if (user) navigate('/main');
  }, [user, isLoading]);

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large"></Spin>
      </main>
    );

  return (
    <>
      <header className="login-header">
        Not a member? <Link to={'/register'}>Sign up now</Link>
      </header>
      <ToastContainer className={'toast-container'} />
      <main className="main--flex">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default Login;
