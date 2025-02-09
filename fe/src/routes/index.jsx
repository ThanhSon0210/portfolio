import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProjectDetail from "../pages/ProjectDetailPage";
import Auth from "../pages/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Admin/dasboard";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Routes cho User */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<Auth />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
        </Route>

        {/* Routes cho Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
  