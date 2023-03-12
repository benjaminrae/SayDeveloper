import renderWithProviders from "~/testUtils/renderWithProviders";
import LoginPage from ".";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    it("Then it should show a heading level 1 with 'Welcome back'", () => {
      const headingText = "Welcome back";

      renderWithProviders(<LoginPage />);

      const renderedHeading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(renderedHeading).toBeInTheDocument();
      1;
    });

    it("Then it should show a button with 'Login with another provider' text", () => {
      const buttonText = "Login with another provider";

      renderWithProviders(<LoginPage />);

      const renderedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(renderedButton).toBeInTheDocument();
    });

    it("Then it should show a link with text 'Forgot password?' on the screen", () => {
      const linkText = "Reset your password here";

      renderWithProviders(<LoginPage />);

      const renderedLink = screen.getByRole("link", { name: linkText });

      expect(renderedLink).toBeInTheDocument();
    });

    it("Then it should show a link with text 'Create an account' on the screen", () => {
      const linkText = "Register here";

      renderWithProviders(<LoginPage />);

      const renderedLink = screen.getByRole("link", { name: linkText });

      expect(renderedLink).toBeInTheDocument();
    });
  });
});
