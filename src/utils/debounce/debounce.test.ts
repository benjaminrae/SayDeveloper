import { describe, expect, it, vi } from "vitest";
import debounce from "./debounce";

describe("Given a debounce function", () => {
  describe("When it receives a function and a delay", () => {
    it("Then it should return a function", () => {
      const delay = 1000;
      const action = vi.fn();

      const result = debounce(action, delay);

      expect(typeof result).toBe("function");
    });

    it("Then it should return a function that calls the action after the delay", () => {
      const delay = 1000;
      const action = vi.fn();

      const result = debounce(action, delay);

      result();

      expect(action).not.toHaveBeenCalled();

      setTimeout(() => {
        expect(action).toHaveBeenCalled();
      }, delay);
    });
  });

  describe("When it receives a function with parameters and a delay", () => {
    it("Then it should return a function that calls the action with the parameters after the delay", () => {
      const delay = 1000;
      const action = vi.fn();
      const parameter1 = "parameter1";
      const parameter2 = "parameter2";

      const result = debounce(action, delay);

      result(parameter1, parameter2);

      expect(action).not.toHaveBeenCalled();

      setTimeout(() => {
        expect(action).toHaveBeenCalledWith(parameter1, parameter2);
      }, delay);
    });
  });
});
