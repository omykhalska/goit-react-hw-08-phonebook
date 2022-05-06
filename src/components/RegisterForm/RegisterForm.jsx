import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const NAME_PATTERN =
  '^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$';
const PASSWORD_PATTERN = '^(?=.*[0-9])(?=.*[A-Z]).{7,32}$';

const schema = yup
  .object({
    name: yup
      .string()
      .required('❌ The field cannot be empty!')
      .matches(
        NAME_PATTERN,
        '❌ Name may contain only alphanumerics, at least 3 characters. The dot (.), underscore (_), or hyphen (-) must not be the first or last character'
      )
      .min(2),
    email: yup
      .string()
      .email('❌Email must be a valid email')
      .required('❌ The field cannot be empty!'),
    password: yup
      .string()
      .required('❌ The field cannot be empty!')
      .matches(
        PASSWORD_PATTERN,
        '❌ The password must be at least 7 characters long with one digital and one uppercase'
      ),
  })
  .required();

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authOperations.register(data));
    reset();
  };

  const NameInput = () => {
    return (
      <>
        <label>
          Name
          <input type="text" placeholder="Name" {...register('name')} />
        </label>
        <p>{errors.name?.message}</p>
      </>
    );
  };

  const EmailInput = () => {
    return (
      <>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email')}
          />
        </label>
        <p>{errors.email?.message}</p>
      </>
    );
  };

  const PasswordInput = () => {
    return (
      <>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            {...register('password')}
          />
        </label>
        <p>{errors.password?.message}</p>
      </>
    );
  };

  return (
    <form name="register-form" onSubmit={handleSubmit(onSubmit)}>
      <NameInput />
      <EmailInput />
      <PasswordInput />
      <button type="submit">Register</button>
    </form>
  );
};
