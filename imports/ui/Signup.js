import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    render() {
        return <div>
            <h1>Signup for Short Link</h1>
            <p>Signup form here</p>
            <p><Link to="/">Go to Login.</Link></p>
        </div>
    }
}