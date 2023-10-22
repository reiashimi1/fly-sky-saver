import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TestingCards from '../pages/LandingPage';
// import LoginAirlinePage from '../pages/LoginAirlinePage.jsx';
import RegisterAirlinePage from '../pages/RegisterAirlinePage.jsx';
import AirlineHomePage from '../pages/AirlineHomePage.jsx';
import AirlineOffersPage from '../pages/AirlineOffersPage.jsx';
import UserProfilePage from '../pages/UserProfilePage';
import AirlineProfilePage from '../pages/AirlineProfilePage.jsx';
import GuestRoute from './GuestRoute.jsx';
import UserAuthRoute from './UserAuthRoute.jsx';
import AirlineAuthRoute from './AirlineAuthRoute.jsx';
import AirlineRewardsPage from "../pages/AirlineRewardsPage.jsx";
import AirlineLoyaltyPage from "../pages/AirlineLoyaltyPage.jsx";
import OffersPage from "../pages/OffersPage.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<TestingCards />} />
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/*<Route path="/login-airline" element={<LoginAirlinePage />} />*/}
          <Route path="/register-airline" element={<RegisterAirlinePage />} />
        </Route>

        <Route element={<UserAuthRoute />}>
          <Route path="/" element={<App />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Route>

        <Route element={<AirlineAuthRoute />}>
          <Route path="/airline-home" element={<AirlineHomePage />} />
          <Route path="/airline-loyalty" element={<AirlineLoyaltyPage />} />
          <Route path="/airline-offers" element={<AirlineOffersPage />} />
          <Route path="/airline-rewards" element={<AirlineRewardsPage />} />
          <Route path="/airline-profile" element={<AirlineProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
