import {count} from "./source/main/counter";
import {createStore} from "redux";
import {action} from "./source/main/action";
import React from "react";
import ReactDOM from "react-dom";

const store = createStore(count);

const Counter = ()=> {
  return <h1>React App</h1>
};

const render = ()=> {
  ReactDOM.render(<Counter />, document.getElementById("root"));
};
store.subscribe(render);
render();