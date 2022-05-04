import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .required('❌ The field cannot be empty!')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        '❌ Name may contain only letters, apostrophe, dash and spaces'
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
        /^(?=.*[0-9])(?=.*[A-Z]).{6,32}$/,
        '❌ The password must be at least 6 characters long with one digital and one uppercase'
      ),
  })
  .required();

export const AuthForm = ({ type }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = data => {
    console.log(data);
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
    <form name={type} onSubmit={handleSubmit(onSubmit)}>
      {type === 'registerForm' ? <NameInput /> : null}
      <EmailInput />
      <PasswordInput />
      <button type="submit">
        {type === 'registerForm' ? 'Register' : 'Sign In'}
      </button>
    </form>
  );
};
