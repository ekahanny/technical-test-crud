import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router"; // Perbaiki impor
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { Profile } from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <PrivateRoute element={<Home />} />, // Gunakan komponen PrivateRoute di sini
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<Profile />} />, // Gunakan komponen PrivateRoute di sini
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
