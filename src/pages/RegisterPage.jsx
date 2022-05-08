import { RegisterForm } from 'components/RegisterForm';
import HeadMessage from 'components/HeadMessage';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export const RegisterPage = () => {
  const isError = useSelector(authSelectors.getIsError);

  return isError ? (
    <>
      <HeadMessage
        text={'Something went wrong... Try again with another email!'}
        color={'red'}
      />
      <RegisterForm />
    </>
  ) : (
    <RegisterForm />
  );
};
