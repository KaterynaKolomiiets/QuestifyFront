import s from "./Header.module.css";
import Container from "../Container";
import BtnLogout from "../../images/btn-logout.png";

import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/user/selectors";
import { userLogout } from "../../redux/user/operation";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const onLogout = () => {
    dispatch(userLogout({ email: user.email, password: user.password }));
  };

  const userEmail = user.email;
  const avatarLetter = userEmail.substr(0, 1).toUpperCase();

  return (
    <header className={s.headerSection}>
      <Container>
        <div className={s.header}>
          <p className={s.logo}>Questify</p>
          <div className={s.userData}>
            <Avatar sx={{ bgcolor: blueGrey[800] }}>{avatarLetter}</Avatar>
            <p className={s.userName}>{user.email}</p>
          </div>
          <div className={s.userDataMobile}>
            <Avatar sx={{ bgcolor: blueGrey[800] }} className={s.avatarMobile}>
              {avatarLetter}
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
