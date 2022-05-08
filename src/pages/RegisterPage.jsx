import { NavLink } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm';

export const RegisterPage = () => {
  return (
    <>
      <p>Don't have an account? Register one!</p>
      <RegisterForm />
      <div>
        Already have an account?
        <NavLink to="/login">Sign In</NavLink>
      </div>
    </>
  );
};
