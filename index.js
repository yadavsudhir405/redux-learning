import {count} from "./source/main/counter";
import {createStore} from "redux";
import {action} from "./source/main/action";

const store = createStore(count);

store.subscribe(()=>{
   document.body.innerText = store.getState();
});

document.addEventListener("click", ()=>{
    store.dispatch({type: action.INCREMENT});
});