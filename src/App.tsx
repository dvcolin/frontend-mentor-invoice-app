import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  useEffect(() => {
    const root = document.documentElement;
    const theme = localStorage.getItem("theme");

    if (theme) {
      root.dataset.theme = theme;
    } else {
      root.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
