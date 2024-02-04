import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RoutingForm from "../forms/RoutingForm";
import { signInWithGoogle } from "../../../fireBase";
const Login = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "15px",
        }}
        onClick={signInWithGoogle}
        variant="light"
      >
        Sign In
      </Button>{" "}
    </div>
  );
};
export default Login;
