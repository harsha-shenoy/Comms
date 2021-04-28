import { Button } from '@material-ui/core'
import React from 'react'
import "../static/css/Login.css"
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';

function Login() {

    const [state , dispatch ] = useStateValue();

    const signIn = ()  => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user,
            })
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn3.vectorstock.com/i/thumb-large/05/42/circle-technology-group-communication-logo-vector-5220542.jpg" alt="" />
                <h1>
                    Sign in to Comms 
                </h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
