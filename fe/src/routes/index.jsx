import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProjectDetail from "../pages/ProjectDetailPage";
import Auth from "../pages/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/auth" index element={<Auth />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/register" index element={<Register />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
