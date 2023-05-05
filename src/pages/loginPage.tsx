import { Link } from 'react-router-dom';
import LoginForm from '../components/loginForm';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
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
