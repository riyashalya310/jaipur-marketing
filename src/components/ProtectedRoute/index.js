import Cookies from "js-cookie";
import { Navigate, Route } from "react-router-dom";
import Login from "../Login";

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Route {...props} />;
  }
  return <Navigate to="/login" component={<Login />} />;
};

export default ProtectedRoute
