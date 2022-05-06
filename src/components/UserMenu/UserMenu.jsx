import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Flexbox } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <Flexbox>
      <AccountCircleIcon style={{ fontSize: '40px' }} />
      <p>{userEmail}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </Flexbox>
  );
};
