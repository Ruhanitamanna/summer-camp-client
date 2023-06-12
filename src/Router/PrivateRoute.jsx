import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      {navigate("/login", { state: { from: location }, replace: true })}
    </div>
  );
};

export default PrivateRoute;
