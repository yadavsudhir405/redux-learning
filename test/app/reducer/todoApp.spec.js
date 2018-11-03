import expect from "expect";
import {todoApp} from "../../../app/reducer/todoApp";
import {createStore} from "redux";

describe("test the todoApp reducer",()=>{
    let store;
    beforeEach("init store", ()=>{
       store = createStore(todoApp);
    });
    it("test the reducer function", ()=>{
       expect(store.getState()).toEqual({"todo":[],"visibilityFilter":"SHOW_ALL"});
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
        expect(store.getState()).toEqual(expectedValue);
        let toDoAction1 = {
            type:"ADD_TODO",
            id:1,
            text: "Learn React",
            completed: false
        };
        store.dispatch(toDoAction1);
        let expectedValue1 = {"todo":[
            {
                id:0,
                text:"Learn Redux",
                completed: false
            },
            {
                id:1,
                text:"Learn React",
                completed: false
            }
        ],
        visibilityFilter: "SHOW_ALL"};
        expect(store.getState()).toEqual(expectedValue1);
    });
});