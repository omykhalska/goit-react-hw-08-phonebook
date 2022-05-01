import Logo from 'images/logo.png';
import { Nav, StyledNavLink, Flexbox } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Flexbox>
        <StyledNavLink to="/">
          <img src={Logo} alt="Phonebook" width="60px" />
        </StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </Flexbox>
      <Flexbox>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Sign In</StyledNavLink>
      </Flexbox>
    </Nav>
  );
};
