import {count} from "../../../app/reducer/counter";
import {action} from "../../../app/common/action";
import expect from "expect";

describe("test counter reducer ", ()=>{
    it(("should return different state correctly"), ()=>{
        expect(count(0,{type: action.INCREMENT})).toEqual(1);
        expect(count(0,{type: action.DECREMENT})).toEqual(-1);
        expect(count(undefined,{})).toEqual(0);
    });
});