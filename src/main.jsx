import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/style.css";
import AppRoutes from "./router/index.jsx";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import FullPageSpinner from "./pages/FullPageSpinner.jsx";
// import 'dotenv/config';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <AppRoutes />
      <FullPageSpinner />
    </Provider>
  </React.StrictMode>
);
