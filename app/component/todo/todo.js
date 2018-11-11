import React from "react";
export class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <li onClick={this.props.onClick} style={{textDecoration: this.props.completed? 'line-through': 'none'}}>
            {this.props.text}
        </li>
    }
}