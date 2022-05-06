import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { LogInForm } from 'components/LogInForm';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
  };

  return (
    <>
      <p>
        Accessing this application requires a login, please enter your
        credentials below!
      </p>
      <LogInForm onSubmit={onSubmit} />
    </>
  );
};
