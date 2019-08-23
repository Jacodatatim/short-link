import React from 'react';
import{Link} from "react-router";

export default class Login extends React.Component{
    render() {
        return <div>
            <h1>Login into Short Link</h1>
            <p>Log form here</p>
            <p><Link to="/signup">Have an account?</Link></p>
        </div>
    }
}