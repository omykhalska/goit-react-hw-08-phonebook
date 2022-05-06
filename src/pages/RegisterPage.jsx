import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { RegisterForm } from 'components/RegisterForm';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authOperations.register(data));
  };

  return (
    <>
      <p>Don't have an account? Register one!</p>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};
