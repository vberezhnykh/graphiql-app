import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/registerForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';
import { useEffect } from 'react';
import { Spin } from 'antd';
import Footer from '../components/footer';

const Register = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/main');
  }, [user, isLoading]);

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large" />
      </main>
    );

  return (
    <>
      <header className="register-header">
        Already have an account? <Link to={'/login'}>Sign In</Link>
      </header>
      <ToastContainer />
      <main className="main--flex">
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};

export default Register;
