import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <p>
        Phonebook is an application that will help you to add or remove a
        contact and to quickly find the desired one. Make a managing of your
        phone book comfortable and easy ! Try it now !
      </p>
      <ul>
        <li>
          <NavLink to={'/login'}>Sign In</NavLink>
        </li>
        <li>
          <NavLink to={'/register'}>Register</NavLink>
        </li>
      </ul>
    </>
  );
};
