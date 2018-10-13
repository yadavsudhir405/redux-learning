import {count} from "./source/main/counter";
import {createStore} from "redux";
import {action} from "./source/main/action";
import React from "react";
import ReactDOM from "react-dom";

const store = createStore(count);

const Counter = ({value})=> {
   return <h1>{value}</h1>
};

const render = ()=> {
  ReactDOM.render(<Counter value={store.getState()} />, document.getElementById("root"));
};
store.subscribe(render);
render();
document.addEventListener("click",()=>{
    store.dispatch({type:action.INCREMENT})
});