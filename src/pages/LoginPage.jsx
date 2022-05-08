import { LogInForm } from 'components/LogInForm';
import { NavLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <p>
        Accessing this application requires a login, please enter your
        credentials below!
      </p>
      <LogInForm />
      <div>
        No account?
        <NavLink to="/register">Create one!</NavLink>
      </div>
    </>
  );
};
