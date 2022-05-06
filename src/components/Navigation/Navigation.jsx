import Logo from 'images/logo.png';
import { StyledNavLink, Flexbox } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Flexbox>
      <StyledNavLink to="/">
        <img src={Logo} alt="Phonebook" width="60px" />
      </StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </Flexbox>
  );
};
