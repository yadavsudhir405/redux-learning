import {count} from "./source/main/counter";
import {createStore} from "redux";
import {action} from "./source/main/action";

const store = createStore(count);
const render = ()=> {
    document.body.innerText = store.getState();
};

render();
store.subscribe(render);

document.addEventListener("click", ()=>{
    store.dispatch({type: action.INCREMENT});
});