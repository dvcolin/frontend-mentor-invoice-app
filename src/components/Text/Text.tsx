import styles from "./Text.module.scss";

interface TextProps {
  className?: string;
  variant?: "small";
  children: React.ReactNode;
}

const Text = ({ className, variant, children }: TextProps) => {
  return (
    <p
      className={`${styles.text} ${variant ? styles[variant] : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
