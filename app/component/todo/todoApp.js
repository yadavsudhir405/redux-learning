import React from "react";
import {store} from "../../appState";
import {FilterLink} from "../filterLink/filterLink";

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
            <TodoList todos={getVisibleTodos(store.getState().todos,store.getState().visibilityFilter)}
                onTodoClick={id=>
                store.dispatch({type: 'TOGGLE_TODO', id})
                }
            />
            <p>
                Show:
                <FilterLink filter="SHOW_ALL" currentVisibility={store.getState().visibilityFilter} displayFilterName="All"/>,
                <FilterLink filter="SHOW_ACTIVE" currentVisibility={store.getState().visibilityFilter} displayFilterName="Active"/>,
                <FilterLink filter="SHOW_COMPLETED" currentVisibility={store.getState().visibilityFilter} displayFilterName="Completed"/>
            </p>
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

function getVisibleTodos(todos, filter) {
    switch (filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter(todo=> !todo.completed);
        case "SHOW_COMPLETED":
            return todos.filter(todo=> todo.completed);
    }
}

const Todo = ({
                text,
                completed,
                onClick
              })=> (
    <li
        onClick={onClick}
        style={{textDecoration: completed? 'line-through': 'none'}}>
        {text}
    </li>
);

const TodoList = ({
                    todos,
                    onTodoClick
                  })=>(
                      <ul>
                          {todos.map(todo => <Todo key={todo.id} {...todo} onClick={()=> onTodoClick(todo.id)}/>)}
                      </ul>
);