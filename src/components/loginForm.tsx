import { ErrorMessage } from '@hookform/error-message/dist';
import { useForm } from 'react-hook-form';
import { logInWithEmailAndPassword } from '../features/firebase';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

  const onSubmit = (data: FormData) => {
    const { login, password } = data;
    logInWithEmailAndPassword(login, password);
  };

  const emailRegex = /\S+@\S+\.\S+/;
  const { t } = useTranslation();

  return (
    <div className="form-container">
      <h1>{t('login.heading')}</h1>
      <ul className="errors-list">
        <ErrorMessage errors={errors} name="login" as="li" />
      </ul>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-field login">
          <label htmlFor="login">{t('login.form.email')}</label>
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
          <div className="label-link-container">
            <label htmlFor="password">{t('login.form.password')}</label>
            <Link to={'/reset'} className="reset-link">
              {t('login.form.reset')}
            </Link>
          </div>
          <input type="password" id="password" className="text-input" {...register('password')} />
        </fieldset>
        <input type="submit" value={t('login.form.submit')} className="form__submit" />
      </form>
    </div>
  );
};

export default LoginForm;
