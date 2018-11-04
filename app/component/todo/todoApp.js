import React from "react";
import {store} from "../../index";

let nextTodoId = 0;

export class TodoApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <button onClick={() => {
                store.dispatch({
                    type: "ADD_TODO",
                    text: "Test",
                    id: nextTodoId++,
                    completed: false
                });
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