// src/pages/Logout.jsx
import { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth).then(() => {
      navigate("/auth");
    });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
