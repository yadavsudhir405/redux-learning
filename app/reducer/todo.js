import {action as Action} from "../common/action";

export const todos = (state=[], action)=> {
    switch (action.type){
        case Action.ADD_TODO :
            return [...state,
                {id: action.id, text: action.text, completed: false}
                ];
        default:
            return state;
    }
};