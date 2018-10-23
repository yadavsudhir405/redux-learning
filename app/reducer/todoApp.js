import {todos} from "./todo";
import {visibilityFilter} from "./visibilityFilter";

export const todoApp = (state, action) => {
  return {
      todo: todos(state.todo, action.todoAction),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action.visibilityAction)
  }
};