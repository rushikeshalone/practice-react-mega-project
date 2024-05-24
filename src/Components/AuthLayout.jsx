/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const AuthStatus = useSelector((state) => state.auth.Status);

  useEffect(() => {
    if (authentication && AuthStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && AuthStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [AuthStatus, navigate, authentication]);

  return loader ?  <h1>Loading...</h1> :<>{children}</>
}
