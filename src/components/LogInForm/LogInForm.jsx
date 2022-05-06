import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const schema = yup
  .object({
    email: yup
      .string()
      .email('❌Email must be a valid email')
      .required('❌ The field cannot be empty!'),
    password: yup.string().required('❌ The field cannot be empty!'),
  })
  .required();

export const LogInForm = () => {
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
    dispatch(authOperations.logIn(data));
    reset();
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
    <form name="login-form" onSubmit={handleSubmit(onSubmit)}>
      <EmailInput />
      <PasswordInput />
      <button type="submit">Sign In</button>
    </form>
  );
};
