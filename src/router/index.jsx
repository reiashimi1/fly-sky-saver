import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TestingCards from '../pages/TestingCards';
import LoginAirlinePage from '../pages/LoginAirlinePage.jsx';
import RegisterAirlinePage from '../pages/RegisterAirlinePage.jsx';
import AirlineHomePage from '../pages/AirlineHomePage.jsx';
import AirlineOffersPage from '../pages/AirlineOffersPage.jsx';
import UserProfilePage from '../pages/UserProfilePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cards" element={<TestingCards />} />
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<UserProfilePage />} />

        <Route path="/login-airline" element={<LoginAirlinePage />} />
        <Route path="/register-airline" element={<RegisterAirlinePage />} />
        <Route path="/airline-home" element={<AirlineHomePage />} />
        <Route path="/airline-offers" element={<AirlineOffersPage />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
