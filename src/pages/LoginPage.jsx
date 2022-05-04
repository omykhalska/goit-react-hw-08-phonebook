import { AuthForm } from 'components/AuthForm';

export const LoginPage = () => {
  return (
    <>
      <p>
        Accessing this application requires a login, please enter your
        credentials below!
      </p>
      <AuthForm type="loginForm" />
    </>
  );
};
