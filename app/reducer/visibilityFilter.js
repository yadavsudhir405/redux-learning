import {action as Action} from "../common/action";

export const visibilityFilter = (state = Action.visibilityFilter.SHOW_ALL, action)=> {
    switch (action.type){
        case Action.visibilityFilter.SHOW_ACTIVE:
            return Action.visibilityFilter.SHOW_ACTIVE;
        case Action.visibilityFilter.SHOW_COMPLETED:
            return Action.visibilityFilter.SHOW_COMPLETED;
        default:
            return state;
    }
};