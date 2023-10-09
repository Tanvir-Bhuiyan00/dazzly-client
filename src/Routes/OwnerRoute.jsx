import { Navigate, useLocation } from "react-router-dom";
import useOwner from "../Hooks/useOwner";
import useAuth from "../hooks/useAuth";

const OwnerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isOwner, isOwnerLoading] = useOwner();
  const location = useLocation();

  if (loading || isOwnerLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isOwner) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default OwnerRoute;
