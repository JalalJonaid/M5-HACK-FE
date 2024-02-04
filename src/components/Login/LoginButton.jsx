import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import RoutingForm from "../forms/RoutingForm";
import { signInWithGoogle } from "../../../fireBase";
const Login = () => {
    return (
        <div>
            <Button onClick={signInWithGoogle} variant="light">Login</Button>{' '}
        </div>
    )
}
export default Login; 