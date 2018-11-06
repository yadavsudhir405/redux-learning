import React from "react";
import ReactDOM from "react-dom";
import {TodoApp} from "./component/todo/todoApp";
import {store} from "./appState";


const render = ()=>{
  ReactDOM.render(
      <TodoApp todos={store.getState().todos}/>, document.getElementById("root")
  );
};

store.subscribe(render);
render();

export {store}