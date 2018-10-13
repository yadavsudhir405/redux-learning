import assert from "assert";
import {Demo} from "../main/demo";

describe("test Demo", ()=>{
    let demo;
    beforeEach(()=>{
        demo = new Demo();
    });

    it("should return the default greeting message", ()=>{
        assert.equal(demo.greeting(), "Hello World");
        console.log(demo.greeting())
   })
});
