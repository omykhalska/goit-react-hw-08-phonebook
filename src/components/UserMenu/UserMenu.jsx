import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Flexbox } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  return (
    <Flexbox>
      <p>{userName}</p>
      <button type="button" onClick={null}>
        Logout
      </button>
    </Flexbox>
  );
};
