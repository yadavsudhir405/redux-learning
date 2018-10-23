import expect from "expect";
import {action as Action} from "../../../app/common/action";
import {todoApp} from "../../../app/reducer/todoApp";
import {visibilityFilter as VisibilityFilterConstant} from "../../../app/common/visibilityFilter";

describe("test the todoApp reducer",()=>{
    it("test the reducer function", ()=>{
        let todoAppState = {
          todo: [],
          visibilityFilter:{}
        };
        let expectedAppState = {todo:[{id:1, text:"Learn Redux", completed:false}],
                                visibilityFilter:"SHOW_ACTIVE"};
        let todoAppAction = {todoAction:{type:Action.ADD_TODO, id: 1, text:"Learn Redux", completed: false},
                             visibilityAction:{type: Action.SET_VISIBILITY_FILTER, filter: VisibilityFilterConstant.SHOW_ACTIVE}};
        expect(todoApp(todoAppState, todoAppAction)).toEqual(expectedAppState);
    });
    it("should be able toggle the todo state",()=>{
        let todoAppState = {
            todo: [{id:1,text:"Learn Redux", completed:false}],
            visibilityFilter:"SHOW_ACTIVE"
        };

        let expectedAppState = {todo:[{id:1, text:"Learn Redux", completed:true}],
            visibilityFilter:"SHOW_ACTIVE"};
        let todoAppAction = {todoAction:{type:Action.TOGGLE_TODO, id: 1},
            visibilityAction:{type: Action.SET_VISIBILITY_FILTER, filter: VisibilityFilterConstant.SHOW_ACTIVE}};
        expect(todoApp(todoAppState, todoAppAction)).toEqual(expectedAppState);
    });
});