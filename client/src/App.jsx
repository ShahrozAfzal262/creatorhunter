import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/common/ProtectedRoute";
import DashLayout from "./components/dashboard/DashLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Creators from "./pages/Creators";
import Lists from "./pages/Lists";
import Outreach from "./pages/Outreach";
import Agent from "./pages/Agent";

const Public = ({ children }) => (<><Navbar />{children}<Footer /></>);

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Public><Landing /></Public>} />
        <Route path="/login" element={<Public><Login /></Public>} />
        <Route path="/register" element={<Public><Register /></Public>} />
        <Route element={<ProtectedRoute><DashLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/agent" element={<Agent />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
