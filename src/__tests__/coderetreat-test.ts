import { test, expect } from "@jest/globals";
import { convert } from "../index";

test("test", () => {
  expect(convert(1)).toBe("I");
  expect(convert(2)).toBe("II");
  expect(convert(3)).toBe("III");
  expect(convert(4)).toBe("IV");
  expect(convert(5)).toBe("V");
  expect(convert(6)).toBe("VI");
  expect(convert(7)).toBe("VII");
  expect(convert(8)).toBe("VIII");
  expect(convert(9)).toBe("IX");
  expect(convert(10)).toBe("X");
  expect(convert(2751)).toBe("MMDCCLI");
  expect(convert(2752)).toBe("MMDCCLII");
  expect(convert(2753)).toBe("MMDCCLIII");
  expect(convert(2754)).toBe("MMDCCLIV");
  expect(convert(2755)).toBe("MMDCCLV");
});
