import expect from "expect";
import {count} from "../main/counter";
import {action} from "../main/action";
import {createStore} from "redux";

describe("counter test", () => {
    let store;
    beforeEach(() => {
        store = createStore(count);
    });
    it(("increment and decrement  should change the state correctly"), () => {
        expect(store.getState()).toEqual(0);

        store.dispatch({type: action.INCREMENT});

        expect(store.getState()).toEqual(1);
        store.dispatch({type: action.INCREMENT});

        expect(store.getState()).toEqual(2);

    })
});