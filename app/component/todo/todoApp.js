import React from "react";
import {store} from "../../appState";

let nextTodoId = 0;

export class TodoApp extends React.Component {
    constructor() {
        super();
        this.textInput = React.createRef();
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
            <ul>
                {this.props.todos.map(todo =>
                    <li key={todo.id}>
                        {todo.text}
                    </li>)}
            </ul>
        </div>
    }
}