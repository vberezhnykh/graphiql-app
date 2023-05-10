import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { registerWithEmailAndPassword } from '../features/firebase';

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

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <ul className="errors-list">
        <ErrorMessage errors={errors} name="name" as="li" />
        <ErrorMessage errors={errors} name="email" as="li" />
        <ErrorMessage errors={errors} name="password" as="li" />
      </ul>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-field user__name">
          <label htmlFor="user_name">Name</label>{' '}
          <input
            type="text"
            id="user_name"
            className={`text-input ${errors.name ? 'text-input--error' : undefined}`}
            {...register('name', {
              pattern: {
                value: nameRegex,
                message: 'Name is invalid',
              },
              minLength: {
                value: 3,
                message: 'Name must consist of at least 2 letters',
              },
              required: 'Name cannot be empty',
            })}
          />
        </fieldset>
        <fieldset className="form-field user__email">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            className={`text-input ${errors.email ? 'text-input--error' : undefined}`}
            {...register('email', {
              required: 'Email cannot be empty',
              pattern: {
                value: emailRegex,
                message: 'Entered value does not match email format',
              },
            })}
          />
        </fieldset>
        <fieldset className="form-field user__password">
          <label htmlFor="user_password">Password</label>
          <input
            type="password"
            id="user_password"
            className={`text-input ${errors.password ? 'text-input--error' : undefined}`}
            {...register('password', {
              pattern: {
                value: passwordRegex,
                message:
                  'Password must contain at least one letter, one number, one special character',
              },
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
              required: 'Password cannot be empty',
            })}
          />
        </fieldset>
        <input type="submit" value="Create Account" className="form__submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
