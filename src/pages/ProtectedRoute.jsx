import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticaded } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticaded) navigate("/");
    },
    [isAuthenticaded, navigate]
  );
  return isAuthenticaded ? children : null;
}

export default ProtectedRoute;
