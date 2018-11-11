import React from "react";
import {Todo} from "../todo/todo";

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <ul>
            {this.props.todos.map(todo=> <Todo key={todo.id} {...todo} onClick={()=>this.props.onTodoClick(todo.id)}/>)}
        </ul>
    }
}