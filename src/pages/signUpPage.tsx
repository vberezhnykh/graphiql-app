import { Link } from 'react-router-dom';
import RegisterForm from '../components/registerForm';

const SignUpPage = () => {
  return (
    <>
      <header>
        Already have an account? <Link to={'/sign-in'}>Sign In</Link>
      </header>
      <main className="main--flex">
        <RegisterForm />
      </main>
      <footer>Footer Template</footer>
    </>
  );
};

export default SignUpPage;
