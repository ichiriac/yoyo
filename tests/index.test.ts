import { add } from "../src/index";

describe("run add", function() {
    it("add 1 + 1", function() {
        const result:number = add(1, 1);
        expect(result).toBe(2);
    })
})