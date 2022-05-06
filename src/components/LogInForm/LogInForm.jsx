import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('❌Email must be a valid email')
      .required('❌ The field cannot be empty!'),
    password: yup.string().required('❌ The field cannot be empty!'),
  })
  .required();

export const LogInForm = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

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
