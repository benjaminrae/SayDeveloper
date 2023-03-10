import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";
import renderWithProviders from "~/testUtils/renderWithProviders";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it is rendered with text 'Disabled Button' and disabled true", () => {
    it("Then it should show a disabled button with text 'Disabled Button' on the screen", () => {
      const buttonText = "Disabled Button";

      renderWithProviders(<Button disabled={true}>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(renderedButton).toBeInTheDocument();
      expect(renderedButton).toBeDisabled();
    });
  });

  describe("When it is rendered with text 'Enabled Button' and disabled false", () => {
    it("Then it should show an enabled button with text 'Enabled Button' on the screen", () => {
      const buttonText = "Enabled Button";

      renderWithProviders(<Button disabled={false}>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(renderedButton).toBeInTheDocument();
      expect(renderedButton).toBeEnabled();
    });
  });

  describe("When it is rendered with text 'Enabled Button' and disabled not passed", () => {
    it("Then it should show an enabled button with text 'Enabled Button' on the screen", () => {
      const buttonText = "Enabled Button";

      renderWithProviders(<Button>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(renderedButton).toBeInTheDocument();
      expect(renderedButton).toBeEnabled();
    });
  });

  describe("When it is rendered and it is passed an onClick function", () => {
    it("Then it should call the onClick function when clicked", async () => {
      const buttonText = "Enabled Button";
      const onClick = vi.fn();

      renderWithProviders(<Button onClick={onClick}>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(renderedButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
