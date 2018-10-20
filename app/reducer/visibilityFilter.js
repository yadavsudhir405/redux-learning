import {visibilityFilter as VisibilityConst} from "../common/visibilityFilter";
import {action as Action} from "../common/action";

export const visibilityFilter = (state = {filter: VisibilityConst.SHOW_ALL}, action)=> {
    switch (action.type){
        case Action.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state.filter;
    }
};