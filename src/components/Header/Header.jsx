import { useDispatch, useSelector } from 'react-redux';
import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";

import Container from "../Container";
import {getUser} from '../../redux/user/selectors'
import { userLogout } from '../../redux/user/operation'
import BtnLogout from "../../images/btn-logout.png";

import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const onLogout = () => {
    dispatch(userLogout({ email: user.email, password: user.password}))
  }
  return (
    <header className={s.headerSection}>
      <Container>
        <div className={s.header}>
          <p className={s.logo}>Questify</p>
          <div className={s.userData}>
            <Avatar sx={{ bgcolor: blueGrey[800] }}>U</Avatar>
            <p className={s.userName}>{user.email}</p>
          </div>
          <div className={s.userDataMobile}>
            <Avatar sx={{ bgcolor: blueGrey[800] }} className={s.avatarMobile}>
              U
            </Avatar>
            <button type="button" className={s.BtnLogout} onClick={onLogout}>
              <img src={BtnLogout} alt="button-logout" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
