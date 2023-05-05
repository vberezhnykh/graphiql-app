import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { logInWithEmailAndPassword } from '../features/firebase';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { saveUserToken } from '../store/features/authSlice';

type FormData = {
  login: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ reValidateMode: 'onSubmit' });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const redirectToMainPage = (refreshToken: string) => {
    alert('successfully login');
    sessionStorage.setItem('Auth Token', refreshToken);
    dispatch(saveUserToken(refreshToken));
    navigate('/main');
  };

  const onSubmit = (data: FormData) => {
    const { login, password } = data;
    logInWithEmailAndPassword(login, password, redirectToMainPage);
  };

  const emailRegex = /\S+@\S+\.\S+/;

  return (
    <div className="form-container">
      <h1>Sign in</h1>
      <ul className="errors-list">
        <ErrorMessage errors={errors} name="login" as="li" />
      </ul>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-field login">
          <label htmlFor="login">Email</label>
          <input
            type="email"
            id="login"
            className="text-input"
            {...register('login', {
              required: 'Email cannot be empty',
              pattern: {
                value: emailRegex,
                message: 'Entered value does not match email format',
              },
            })}
          />
        </fieldset>
        <fieldset className="form-field password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="text-input" {...register('password')} />
        </fieldset>
        <input type="submit" value="Sign In" className="form__submit" />
      </form>
    </div>
  );
};

export default LoginForm;
