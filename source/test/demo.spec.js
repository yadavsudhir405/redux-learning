import expect from "expect";
import {Demo} from "../main/demo";

describe("test Demo", ()=>{
    let demo;
    beforeEach(()=>{
        demo = new Demo();
    });

    it("should return the default greeting message", ()=>{
        expect(demo.greeting()).toBe("Hello World");
   })
});
