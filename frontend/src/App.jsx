import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/hr/Login";
import HRDashboard from "./pages/hr/HRDashboard";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected HR route */}
        <Route
          path="/hr"
          element={
            <ProtectedRoute role="HR">
              <HRDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Employee route */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute role="EMPLOYEE">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
