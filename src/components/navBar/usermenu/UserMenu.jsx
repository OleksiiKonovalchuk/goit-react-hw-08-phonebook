import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import Button from 'shared/components/button/Button';
import css from './userMenu.module.scss';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      {name && <h3 className={css.header}>{name}</h3>}
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};
export default UserMenu;
