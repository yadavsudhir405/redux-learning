import {visibilityFilter} from "../../../app/reducer/visibilityFilter";
import {action as Action} from "../../../app/common/action";
import expect from "expect";

describe("test visibility filter reducer ", ()=> {
    it("should return the state correctly", ()=> {
        expect(visibilityFilter(undefined, {type:Action.visibilityFilter.SHOW_ALL})).toEqual("SHOW_ALL");
    })
});