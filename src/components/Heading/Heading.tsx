import styles from "./Heading.module.scss";

interface HeadingProps {
  as: "h1" | "h2" | "h3";
  className?: string;
  variant?: "small";
  children: React.ReactNode;
}

const Heading = ({
  as: Component,
  className,
  variant,
  children,
}: HeadingProps) => {
  return (
    <Component
      className={`${styles[Component]} ${
        variant ? styles[`${Component}--${variant}`] : ""
      } ${className ? className : ""}`}
    >
      {children}
    </Component>
  );
};

export default Heading;
