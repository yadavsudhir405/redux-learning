import expect from "expect";
import {todos} from "../../../app/reducer/todo";
import {action as Action} from "../../../app/common/action";
import deepFreeze from "deep-freeze";

describe("test todos reducer", () => {
    it("should return the state correctly", () => {
        const stateBefore = [];
        const action = {
            type: Action.ADD_TODO,
            id: 0,
            text: "Learn React"
        };
        const stateAfter = [
            {
                id: 0,
                text: "Learn React",
                completed: false
            }
        ];
        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
    it("should return the correct state", () => {
        const stateBefore = [
            {
                id: 0,
                text: "Learn React",
                completed: false
            }
        ];
        const stateAfter = [
            {
                id: 0,
                text: "Learn React",
                completed: true
            }
        ];
        const action = {
            type: Action.TOGGLE_TODO,
            id: 0
        };
        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter)
    });
});