import Navbar from "../Navbar/Navbar";
import Container from "../../Container/Container";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
