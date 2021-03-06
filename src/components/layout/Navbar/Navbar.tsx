import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { ReactComponent as MoonIcon } from "../../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/icon-sun.svg";
import profileImage from "../../../assets/image-avatar.jpg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    const root = document.documentElement;

    theme === "light"
      ? (root.dataset.theme = "dark")
      : (root.dataset.theme = "light");

    localStorage.setItem("theme", root.dataset.theme);
    setTheme(root.dataset.theme);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logoBox}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <div className={styles.logoBoxAccent} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.themeToggleBox}>
          <button className={styles.themeToggleButton} onClick={toggleTheme}>
            {theme === "light" ? (
              <MoonIcon className={styles.themeToggleIcon} />
            ) : (
              <SunIcon className={styles.themeToggleIcon} />
            )}
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
