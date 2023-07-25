import { describe, it, expect } from "vitest";
import { sanitizeText } from "./sanitizeText";

describe("Functionality of sanitizeText function", () => {
  it("Should remove html tags from input", () => {
    const input = "<p>Hello <b>World!</b></p>";
    const expected = "Hello World!";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });

  it("Should replace special characters or patterns with empty strings", () => {
    const input = "Hello@#$%^&*()+{}:\"<>|[];',/\\`~World.!?";
    const expected = "HelloWorld.!?";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });

  it("Should trim leading and trailing whitespace", () => {
    const input = "   \t Hello, World!  \n ";
    const expected = "Hello World!";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });

  it("Should trim whitespaces in between", () => {
    const input = "Hello   \t \nWorld!";
    const expected = "Hello World!";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });

  it("Should handle input with only HTML tags", () => {
    const input = "<div></div><span></span><br>";
    const expected = "";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });
});
