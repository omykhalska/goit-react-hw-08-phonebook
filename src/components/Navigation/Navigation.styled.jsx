import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  color: white;

  &.active {
    font-weight: 700;
    color: tomato;
  }
`;
