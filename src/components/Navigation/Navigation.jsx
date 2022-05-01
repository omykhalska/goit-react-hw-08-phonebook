import { Nav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Dashboard</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </Nav>
  );
};

export default Navigation;
