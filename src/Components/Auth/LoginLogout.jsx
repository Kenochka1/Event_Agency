import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

const LoginLogout = () => {
  return <div></div>;
};

export default function LoginLogout() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useContext(authContext);
  const navigate = useNavigate();
  const signIn = () => {
    handleLogin();
    navigate;
  };
}
