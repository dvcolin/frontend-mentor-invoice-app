import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
