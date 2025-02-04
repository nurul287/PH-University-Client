import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
