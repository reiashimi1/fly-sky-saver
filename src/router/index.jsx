import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TestingCards from "../pages/TestingCards";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="cards" element={<TestingCards />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
