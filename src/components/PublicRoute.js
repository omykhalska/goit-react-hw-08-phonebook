import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}) => {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = IsLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};
