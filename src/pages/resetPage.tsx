import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendPasswordResetOnEmail } from '../features/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Spin } from 'antd';
import Footer from '../components/footer';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

type FormData = {
  email: string;
};

const Reset = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ reValidateMode: 'onSubmit' });

  const { t } = useTranslation();

  const onSubmit = async (data: FormData) => {
    const { email } = data;
    const res = await sendPasswordResetOnEmail(email);
    if (res) {
      toast.success(t('firebase.reset.successMsg'));
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  };

  useEffect(() => {
    if (isLoading) return;
    if (user) navigate('/main');
  }, [user, isLoading]);

  const emailRegex = /\S+@\S+\.\S+/;

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large" />
      </main>
    );

  return (
    <>
      <header className="register-header">
        {t('reset.header.part1')} <Link to={'/login'}>{t('reset.header.part2')}</Link>
      </header>
      <ToastContainer className={'toast-container'} />
      <main className="main--flex">
        <div className="form-container">
          <h1>{t('reset.heading')}</h1>
          <ul className="errors-list">
            <ErrorMessage errors={errors} name="email" as="li" />
          </ul>
          <form className="reset-form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="form-field reset">
              <label htmlFor="email">{t('reset.email')}</label>
              <input
                type="email"
                id="email"
                className="text-input"
                {...register('email', {
                  required: `${t('reset.errors.required')}`,
                  pattern: {
                    value: emailRegex,
                    message: `${t('reset.errors.invalid')}`,
                  },
                })}
              />
            </fieldset>
            <input type="submit" value={t('reset.submit')} className="form__submit" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Reset;
