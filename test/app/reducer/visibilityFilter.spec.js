import {visibilityFilter} from "../../../app/reducer/visibilityFilter";
import {action as Action} from "../../../app/common/action";
import {visibilityFilter as VisibilityFilter} from "../../../app/common/visibilityFilter";
import expect from "expect";

describe("test visibility filter reducer ", ()=> {
    it("should return the state correctly", ()=> {
        expect(visibilityFilter(undefined ,{type:"DummyType", filter: VisibilityFilter.SHOW_ACTIVE}))
            .toEqual("SHOW_ALL");
        expect(visibilityFilter(undefined,{type: Action.SET_VISIBILITY_FILTER, filter:VisibilityFilter.SHOW_ALL}))
            .toEqual("SHOW_ALL");

    })
});