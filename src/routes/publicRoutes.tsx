import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../hooks/context/context";

interface PublicRoutesProps {
  children: React.ReactNode;
}

const PublicRoutes = ({ children }: PublicRoutesProps) => {
  const { accessToken, user } = useContext(AppContext);
  console.log(accessToken, user);
  if (accessToken && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoutes;
