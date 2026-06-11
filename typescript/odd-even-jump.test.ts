import { describe, it, expect } from "vitest";
import { oddEvenJumps } from "./odd-even-jump";

describe("oddEvenJumps", () => {
  it("[10,13,12,14,15] → 2", () => {
    expect(oddEvenJumps([10, 13, 12, 14, 15])).toBe(2);
  });

  it("[2,3,1,1,4] → 3", () => {
    expect(oddEvenJumps([2, 3, 1, 1, 4])).toBe(3);
  });

  it("[5,1,3,4,2] → 3", () => {
    expect(oddEvenJumps([5, 1, 3, 4, 2])).toBe(3);
  });

  it("[1] → 1 (single element)", () => {
    expect(oddEvenJumps([1])).toBe(1);
  });
});
