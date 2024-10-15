import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDataFromLocalStorage } from "../utils/PersistantData";
import { isTokenExpired } from "../utils/tokenManager";

// Mock function to check if the user is authenticated
const isAuthenticated = () => {
  const userData = getDataFromLocalStorage("user");
  return !isTokenExpired(userData?.access_token);
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
