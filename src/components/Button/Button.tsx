import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "1" | "2" | "3" | "4" | "5" | "6";
  children: React.ReactNode;
}

const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button className={styles[`button-${variant}`]}>
      {variant === "1" ? (
        <div className={styles.iconBox}>
          <PlusIcon className={styles.icon} />
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
