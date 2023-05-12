import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendPasswordResetOnEmail } from '../features/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Spin } from 'antd';

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

  const onSubmit = (data: FormData) => {
    const { email } = data;
    sendPasswordResetOnEmail(email);
    navigate('/login');
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
        Remember your password? <Link to={'/login'}>Sign in</Link>
      </header>
      <main className="main--flex">
        <div className="form-container">
          <h1>Forgot password?</h1>
          <ul className="errors-list">
            <ErrorMessage errors={errors} name="email" as="li" />
          </ul>
          <form className="reset-form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="form-field reset">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="text-input"
                {...register('email', {
                  required: 'Email cannot be empty',
                  pattern: {
                    value: emailRegex,
                    message: 'Entered value does not match email format',
                  },
                })}
              />
            </fieldset>
            <input type="submit" value="Reset Password" className="form__submit" />
          </form>
        </div>
      </main>
      <footer>Footer Template</footer>
    </>
  );
};

export default Reset;
