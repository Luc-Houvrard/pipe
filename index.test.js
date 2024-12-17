import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { sum } from "./index.js";

describe("sum function", () => {   
    it("should return the sum of two numbers", () => {
        strictEqual(sum(1, 2), 3);
    });
    
    it("should handle negative numbers", () => {
        strictEqual(sum(-1, -2), -3);
    });
    
    it("should handle floating-point numbers", () => {
        strictEqual(sum(1.5, 2.5), 4);
    });
});