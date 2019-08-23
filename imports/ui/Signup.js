import React from 'react';
import {Link} from "react-router";
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component{
    constructor(props){
        super(props);//because we are over-riding the super-constructor.
        this.state ={
            error:''
        }
    }
    onSubmit(e){
        e.preventDefault(); //e is for error, this prevents the page from refreshing

        let email=this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Accounts.createUser({email,password}, (err)=>{
            console.log('Signup callback',err);
        });

    }
    render() {
        return <div>
            <h1>Signup for Short Link</h1>

            {this.state.error? <p>{this.state.error}</p>:undefined}

            <p>{this.state.count}</p>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='email' ref="email" name='email' placeholder='Email'/>
                <input type='password' ref="password" name='password' placeholder='Password'/>
                <button>Create Account</button>
            </form>
            <p><Link to="/">Go to Login.</Link></p>
        </div>
    }
}