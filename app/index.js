import {createStore} from "redux";
import React from "react";
import ReactDOM from "react-dom";
import {TodoApp} from "./component/todo/todoApp";
import {todoApp} from "./reducer/todoApp";

const store = createStore(todoApp);


const render = ()=>{
  ReactDOM.render(
      <TodoApp todos={store.getState().todo}/>, document.getElementById("root")
  );
};

store.subscribe(render);
render();

export {store}