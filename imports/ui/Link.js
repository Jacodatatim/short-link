import React from 'react';
import {browserHistory} from "react-router";

export default class Link extends React.Component{
    onLogout(){
        browserHistory.push('/');
    }
    render() {
        return <div>
            <h1>Links here</h1>
            <button onClick={this.onLogout.bind(this)}>To Login</button>
        </div>
    }
}