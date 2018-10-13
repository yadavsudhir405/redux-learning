import {count} from "./component/counter";
import {createStore} from "redux";
import {action} from "./common/action";
import React from "react";
import ReactDOM from "react-dom";
import {Counter} from "./component/counter/counter";

const store = createStore(count);


const render = ()=> {
  ReactDOM.render(<Counter value={store.getState()} />, document.getElementById("root"));
};
store.subscribe(render);
render();
document.addEventListener("click",()=>{
    store.dispatch({type:action.INCREMENT})
});