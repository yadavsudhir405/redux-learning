import React from "react";
import {store} from "../../appState";

let nextTodoId = 0;

export class TodoApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <input ref={node =>{this.input = node}}/>
            <button onClick={() => {
                store.dispatch({
                    type: "ADD_TODO",
                    text: this.input.value,
                    id: nextTodoId++,
                    completed: false
                });
                this.input.value = "";
            }}>Add Todo
            </button>
            <ul>
                {this.props.todos.map(todo =>
                    <li key={todo.id}>
                        {todo.text}
                    </li>)}
            </ul>
        </div>
    }
}