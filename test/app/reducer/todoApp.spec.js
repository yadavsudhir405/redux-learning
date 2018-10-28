import expect from "expect";
import {action as Action} from "../../../app/common/action";
import {todoApp} from "../../../app/reducer/todoApp";
import {visibilityFilter as VisibilityFilterConstant} from "../../../app/common/visibilityFilter";
import {createStore} from "redux";

describe("test the todoApp reducer",()=>{
    let store;
    beforeEach("init store", ()=>{
       store = createStore(todoApp);
    });
    it("test the reducer function", ()=>{
       expect(store.getState()).toEqual({"todo":[],"visibilityFilter":"SHOW_ALL"});
        /*let todoAppState = {
          todo: [],
          visibilityFilter:{}
        };
        let expectedAppState = {todo:[{id:1, text:"Learn Redux", completed:false}],
                                visibilityFilter:"SHOW_ACTIVE"};
        let todoAppAction = {todoAction:{type:Action.ADD_TODO, id: 1, text:"Learn Redux", completed: false},
                             visibilityAction:{type: Action.SET_VISIBILITY_FILTER, filter: VisibilityFilterConstant.SHOW_ACTIVE}};
        expect(todoApp(todoAppState, todoAppAction)).toEqual(expectedAppState);*/
    });
    it('should update the state',()=>{
        let toDoAction = {
            type:"ADD_TODO",
            id:0,
            text: "Learn Redux",
            completed: false
        };
        let expectedValue = {
          "todo":[{
              id:0,
              text:"Learn Redux",
              completed: false
          }],
          "visibilityFilter":"SHOW_ALL"
        };
        store.dispatch(toDoAction);
        console.log("State------->>");
        console.log(store.getState());
        console.log("**********");
        expect(store.getState()).toEqual(expectedValue);
    });


});