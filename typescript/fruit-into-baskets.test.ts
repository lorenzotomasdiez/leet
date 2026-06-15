import { describe, it, expect } from "vitest";
import { totalFruit } from "./fruit-into-baskets";

describe("totalFruit", () => {
  // examples from the problem
  it("[1,2,1] → 3 (pick all)", () => {
    expect(totalFruit([1, 2, 1])).toBe(3);
  });

  it("[0,1,2,2] → 3 (pick [1,2,2])", () => {
    expect(totalFruit([0, 1, 2, 2])).toBe(3);
  });

  it("[1,2,3,2,2] → 4 (pick [2,3,2,2])", () => {
    expect(totalFruit([1, 2, 3, 2, 2])).toBe(4);
  });

  // edge cases
  it("[5] → 1 (single tree)", () => {
    expect(totalFruit([5])).toBe(1);
  });

  it("[1,1,1,1] → 4 (all same type)", () => {
    expect(totalFruit([1, 1, 1, 1])).toBe(4);
  });

  it("[1,2,3,4] → 2 (all different, best is any adjacent pair)", () => {
    expect(totalFruit([1, 2, 3, 4])).toBe(2);
  });

  it("[1,1,2,3] → 3 (best window starts at index 0: [1,1,2])", () => {
    expect(totalFruit([1, 1, 2, 3])).toBe(3);
  });

  it("[3,3,3,1,2,1,1,2,3,3,4] → 5 (best window [1,2,1,1,2])", () => {
    expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5);
  });
});
