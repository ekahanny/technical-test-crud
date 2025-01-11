/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("users");
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
