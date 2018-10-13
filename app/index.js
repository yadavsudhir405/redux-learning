import {count} from "./reducer/counter";
import {createStore} from "redux";
import {action} from "./common/action";
import React from "react";
import ReactDOM from "react-dom";
import {Counter} from "./component/counter/counter";

const store = createStore(count);


const render = ()=> {
  ReactDOM.render(<Counter value={store.getState()}
                           increment={()=>{store.dispatch({type: action.INCREMENT})}}
                           decrement={()=>{store.dispatch({type:action.DECREMENT})}}/>, document.getElementById("root"));
};
store.subscribe(render);
render();