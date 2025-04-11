import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home.tsx"; // Placeholder for now
import PrivateRoute from "./PrivateRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          {/* Public routes (only accessible when NOT logged in) */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
  
          {/* Private routes (only accessible when logged in) */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Catch-all route: Redirect to Home if the path doesn't exist */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
  };
export default AppRoutes;
