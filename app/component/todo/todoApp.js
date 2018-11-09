import React from "react";
import {store} from "../../appState";

let nextTodoId = 0;

export class TodoApp extends React.Component {
    constructor() {
        super();
        this.textInput = React.createRef();
        this.focusTextField = this.focusTextField.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    render() {
        return <div>
            <input ref={this.textInput}/>
            <button onClick={() => {
                store.dispatch({
                    type: "ADD_TODO",
                    text: this.textInput.current.value,
                    id: nextTodoId++,
                    completed: false
                });
                this.textInput.current.value = "";
            }}>Add Todo
            </button>
            <input type="button" onClick={this.focusTextField} value="Focus the text field"/>
            <input type="button" onClick={this.removeTodo} value="Remove the TODO"/>
            <ul>
                {this.props.todos.map(todo =>
                    <li key={todo.id} onClick={()=>{toggleTodo(todo.id)}} style={{textDecoration: todo.completed? 'line-through': 'none'}}>
                        {todo.text}
                    </li>)}
            </ul>
        </div>
    }
    focusTextField(){
        this.textInput.current.focus();
    }
    removeTodo(){
        store.dispatch({type:"REMOVE_TODO"});
    }

}
function toggleTodo(id){
    store.dispatch({type:"TOGGLE_TODO", id: id})
}