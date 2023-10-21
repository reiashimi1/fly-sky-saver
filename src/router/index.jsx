import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LoginAirlinePage from "../pages/LoginAirlinePage.jsx";
import RegisterAirlinePage from "../pages/RegisterAirlinePage.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-airline" element={<LoginAirlinePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-airline" element={<RegisterAirlinePage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
