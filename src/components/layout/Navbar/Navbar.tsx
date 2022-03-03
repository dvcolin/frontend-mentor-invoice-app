import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as MoonIcon } from "../../../assets/icon-moon.svg";
import profileImage from "../../../assets/image-avatar.jpg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logoBox}>
          <Logo className={styles.logo} />
          <div className={styles.logoBoxAccent} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.themeToggleBox}>
          <button className={styles.themeToggleButton}>
            <MoonIcon className={styles.themeToggleIcon} />
          </button>
        </div>
        <div className={styles.divider} />
        <div className={styles.profileBox}>
          <img
            className={styles.profileImage}
            src={profileImage}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
