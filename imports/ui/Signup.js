import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    constructor(props){
        super(props);//because we are over-riding the super-constructor.
        this.state ={
            count:0
        }
    }
    increment(){
        //get old count value and plus 1
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return <div>
            <h1>Signup for Short Link</h1>
            <p>{this.state.count}</p>
            <p><button onClick={this.increment.bind(this)}>+1</button>
            <button onClick={()=>this.setState({count: this.state.count-1}).bind(this)}>-1</button></p>
            <p><Link to="/">Go to Login.</Link></p>
        </div>
    }
}