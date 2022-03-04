import styles from "./Heading.module.scss";

interface HeadingProps {
  as: "h1" | "h2" | "h3";
  variant?: "small";
  children: React.ReactNode;
}

const Heading = ({ as: Component, variant, children }: HeadingProps) => {
  return (
    <Component
      className={`${styles[Component]} ${
        variant ? styles[`${Component}--${variant}`] : ""
      }`}
    >
      {children}
    </Component>
  );
};

export default Heading;
