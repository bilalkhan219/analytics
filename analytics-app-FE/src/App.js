// src/App.js
import React from "react";
import Home from "./components/Home.js";
import Analytics from "./components/analytics/Analytics.js";
import Login from "./components/auth/Login.js";
import Signup from "./components/auth/Signup.js";
import ContactUs from "./components/ContactUs.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomRoute } from "./components/utils/customRoute.js";
import ProtectedRoute from "./components/utils/protectedRoute.js";

const publicRoutes = [
  {
    path: "/signup",
    element: <Signup />,
    sessionTime: false,
    pageName: "signup",
  },
  {
    path: "/login",
    element: <Login />,
    sessionTime: false,
    pageName: "login",
  },
];

const privateRoutes = [
  { path: "/", element: <Home />, sessionTime: true, pageName: "home" },
  {
    path: "/contact",
    element: <ContactUs />,
    sessionTime: true,
    pageName: "contact",
  },
  ,
  {
    path: "/analytics",
    element: <Analytics />,
    sessionTime: false,
    pageName: "analytics",
  },
];

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {publicRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
          {privateRoutes.map(({ path, element, sessionTime, pageName }) => {
            return (
              <Route key={path} element={<ProtectedRoute />}>
                <Route
                  key={path}
                  path={path}
                  element={
                    sessionTime ? (
                      <CustomRoute key={path} pageName={pageName}>
                        {element}
                      </CustomRoute>
                    ) : (
                      element
                    )
                  }
                ></Route>
              </Route>
            );
          })}
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
