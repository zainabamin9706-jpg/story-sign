import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../hooks/context/context";

interface PrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const { accessToken, user } = useContext(AppContext);

  if (!accessToken || !user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
