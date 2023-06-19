import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/registerForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';
import { useEffect } from 'react';
import { Spin } from 'antd';
import Footer from '../components/footer';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        {t('register.header.part1')} <Link to={'/login'}>{t('register.header.part2')}</Link>
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
