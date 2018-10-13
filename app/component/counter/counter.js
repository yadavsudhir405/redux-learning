import React from "react";

export class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <h1>{this.props.value}</h1>
            <button onClick={this.props.increment}>+</button>
            <button onClick={this.props.decrement}>-</button>
        </div>
    }
}