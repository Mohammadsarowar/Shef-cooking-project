import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

const PrivateRouter = ({ children }) => {
  const location = useLocation();

  console.log(location);
  const { user,isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Spinner className="mx-auto" animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRouter;
