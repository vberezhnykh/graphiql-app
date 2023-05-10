import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/registerForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';
import { useEffect } from 'react';

const Register = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/main');
  }, [user]);
  return (
    <>
      <header>
        Already have an account? <Link to={'/login'}>Sign In</Link>
      </header>
      <ToastContainer />
      <main className="main--flex">
        <RegisterForm />
      </main>
      <footer>Footer Template</footer>
    </>
  );
};

export default Register;
