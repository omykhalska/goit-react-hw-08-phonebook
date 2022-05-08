import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { LogInForm } from 'components/LogInForm';
import HeadMessage from 'components/HeadMessage';

export const LoginPage = () => {
  const isError = useSelector(authSelectors.getIsError);

  return (
    <>
      {isError && (
        <HeadMessage
          text={'Something went wrong... Try again!'}
          color={'red'}
        />
      )}
      <LogInForm />
    </>
  );
};
