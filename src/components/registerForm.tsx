import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { registerWithEmailAndPassword } from '../features/firebase';
import { useTranslation } from 'react-i18next';

type FormData = {
  name: string;
  login: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ reValidateMode: 'onSubmit', criteriaMode: 'all' });

  const onSubmit = (data: FormData) => {
    const { name, email, password } = data;
    registerWithEmailAndPassword(name, email, password);
  };

  const nameRegex = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const emailRegex = /\S+@\S+\.\S+/;

  const { t } = useTranslation();

  return (
    <div className="form-container">
      <h1>{t('register.heading')}</h1>
      <ul className="errors-list">
        <ErrorMessage errors={errors} name="name" as="li" />
        <ErrorMessage errors={errors} name="email" as="li" />
        <ErrorMessage errors={errors} name="password" as="li" />
      </ul>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-field user__name">
          <label htmlFor="user_name">{t('register.form.name')}</label>{' '}
          <input
            type="text"
            id="user_name"
            className={`text-input ${errors.name ? 'text-input--error' : undefined}`}
            {...register('name', {
              pattern: {
                value: nameRegex,
                message: `${t('register.errors.name.invalid')}`,
              },
              minLength: {
                value: 2,
                message: `${t('register.errors.name.minlength')}`,
              },
              required: `${t('register.errors.name.empty')}`,
            })}
          />
        </fieldset>
        <fieldset className="form-field user__email">
          <label htmlFor="user_email">{t('register.form.email')}</label>
          <input
            type="email"
            id="user_email"
            className={`text-input ${errors.email ? 'text-input--error' : undefined}`}
            {...register('email', {
              required: `${t('register.errors.email.empty')}`,
              pattern: {
                value: emailRegex,
                message: `${t('register.errors.email.invalid')}`,
              },
            })}
          />
        </fieldset>
        <fieldset className="form-field user__password">
          <label htmlFor="user_password">{t('register.form.password')}</label>
          <input
            type="password"
            id="user_password"
            className={`text-input ${errors.password ? 'text-input--error' : undefined}`}
            {...register('password', {
              pattern: {
                value: passwordRegex,
                message: `${t('register.errors.password.invalid')}`,
              },
              minLength: {
                value: 8,
                message: `${t('register.errors.password.minlength')}`,
              },
              required: `${t('register.errors.password.empty')}`,
            })}
          />
        </fieldset>
        <input type="submit" value={t('register.form.submit')} className="form__submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
