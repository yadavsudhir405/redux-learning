import {action as Action} from "../common/action";
export const count = (state=0, action) =>{
    switch (action.type) {
        case Action.INCREMENT :
            return state +1;
        case Action.DECREMENT :
            return state-1;
        default:
            return state;
    }
};
