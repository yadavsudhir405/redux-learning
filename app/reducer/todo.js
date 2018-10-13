import {action as Action} from "../common/action";

export const todos = (state = [], action) => {
    switch (action.type) {
        case Action.ADD_TODO :
            return [...state,
                todo(state, action)
            ];
        case Action.TOGGLE_TODO :
            return state.map(eachState =>
                todo(eachState, action)
            );
        default:
            return state;
    }
};

const todo = (state, action) => {
    switch (action.type) {
        case Action.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case Action.TOGGLE_TODO:
            if(state.id !== action.id){
                return state
            }else{
                return {...state, completed:!state.completed}
            }
        default:
            return state;
    }

};