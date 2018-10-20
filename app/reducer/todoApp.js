import {action as Action} from "../common/action";
import {todos} from "./todo";
import {visibilityFilter} from "./visibilityFilter";

export const todoApp = (state, action) => {
  return {
      todo: todos(state.todo, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
};