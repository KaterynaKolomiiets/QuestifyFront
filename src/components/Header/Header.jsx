import s from "./Header.module.css";
import Container from "../Container";
import BtnLogout from "../../images/btn-logout.png";

import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";

const Header = () => {
  return (
    <header className={s.headerSection}>
      <Container>
        <div className={s.header}>
          <p className={s.logo}>Questify</p>
          <div className={s.userData}>
            <Avatar sx={{ bgcolor: blueGrey[800] }}>U</Avatar>
            <p className={s.userName}>UserName</p>
          </div>
          <div className={s.userDataMobile}>
            <Avatar sx={{ bgcolor: blueGrey[800] }} className={s.avatarMobile}>
              U
            </Avatar>
            <button type="button" className={s.BtnLogout}>
              <img src={BtnLogout} alt="button-logout" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
