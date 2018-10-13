import {action as Action} from "../common/action";

export const todos = (state=[], action)=> {
    switch (action.type){
        case Action.ADD_TODO :
            return [...state,
                {id: action.id, text: action.text, completed: false}
                ];
        case Action.TOGGLE_TODO :
            return state.map(todo =>{
                if(todo.id !== action.id){
                    return todo;
                }
                //return Object.assign({},todo,{completed: !todo.completed})  either  this syntax or below one
                return {
                    ...todo,
                    completed: !todo.completed
                }
            });
        default:
            return state;
    }
};