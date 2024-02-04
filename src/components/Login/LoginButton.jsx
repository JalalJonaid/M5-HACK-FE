import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import RoutingForm from "../forms/RoutingForm";
import { signInWithGoogle } from "../../../fireBase";
import { userName } from "../../../fireBase";

const Login = () => {
    return (
        <div>
            <Button onClick={signInWithGoogle} variant="light">Sign In</Button>{' '}
        </div>
    )
}
export default Login; 