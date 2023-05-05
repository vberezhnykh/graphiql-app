import { Link } from 'react-router-dom';
import RegisterForm from '../components/registerForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  return (
    <>
      <header>
        Already have an account? <Link to={'/sign-in'}>Sign In</Link>
      </header>
      <ToastContainer />
      <main className="main--flex">
        <RegisterForm />
      </main>
      <footer>Footer Template</footer>
    </>
  );
};

export default SignUpPage;
