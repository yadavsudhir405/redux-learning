import {createStore} from "redux";
import {todoApp} from "./reducer/todoApp";

export const store = createStore(todoApp);