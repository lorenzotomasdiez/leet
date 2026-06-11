import { describe, it, expect } from "vitest";
import { licenseKeyFormatting } from "./license-key-formatting";

describe("licenseKeyFormatting", () => {
  it('"5F3Z-2e-9-w", k=4 → "5F3Z-2E9W"', () => {
    expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toBe("5F3Z-2E9W");
  });

  it('"2-5g-3-J", k=2 → "2-5G-3J"', () => {
    expect(licenseKeyFormatting("2-5g-3-J", 2)).toBe("2-5G-3J");
  });

  it('"--a-a-a-a--", k=2 → "AA-AA"', () => {
    expect(licenseKeyFormatting("--a-a-a-a--", 2)).toBe("AA-AA");
  });

  it('"a", k=1 → "A" (single char)', () => {
    expect(licenseKeyFormatting("a", 1)).toBe("A");
  });
});
