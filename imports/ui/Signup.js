import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    constructor(props){
        super(props);//because we are over-riding the super-constructor.
        this.state ={
            error:''
        }
    }
    onSubmit(e){
        e.preventDefault(); //e is for error, this prevents the page from refreshing
        this.setState({
            error:'Something went wrong?' //set the error message equal to
        });
    }
    render() {
        return <div>
            <h1>Signup for Short Link</h1>

            {this.state.error? <p>{this.state.error}</p>:undefined}

            <p>{this.state.count}</p>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='email' name='email' placeholder='Email'/>
                <input type='password' name='password' placeholder='Password'/>
                <button>Create Account</button>
            </form>
            <p><Link to="/">Go to Login.</Link></p>
        </div>
    }
}