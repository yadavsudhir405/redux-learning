import {todos} from "./todo";
import {visibilityFilter} from "./visibilityFilter";
import {combineReducers} from "redux";
export const todoApp = combineReducers({
    todo: todos,
    visibilityFilter
});