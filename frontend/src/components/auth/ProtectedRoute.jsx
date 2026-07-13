import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  allowedRole,
}) {
  // Get stored user
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Wrong role
  if (allowedRole && user.role !== allowedRole) {
    if (user.role === "customer") {
      return <Navigate to="/customer/dashboard" replace />;
    }
    if (user.role === "provider") {
      return <Navigate to="/provider/dashboard" replace />;
    }
    
    return <Navigate to="/" replace />;
  } 

  // Authorized
  return children;
}