import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import renderWithProviders from "~/testUtils/renderWithProviders";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    it("Then it should show two inputs with labels 'Username' and 'Password' on the screen", () => {
      const passwordLabel = "Password";
      const usernameLabel = "Username";

      renderWithProviders(<LoginForm />);

      const renderedUsernameInput = screen.getByLabelText(usernameLabel);
      const renderedPasswordInput = screen.getByLabelText(passwordLabel);

      expect(renderedUsernameInput).toBeInTheDocument();
      expect(renderedPasswordInput).toBeInTheDocument();
    });

    it("Then it should show a button with text 'Login' on the screen", () => {
      const buttonText = "Login";

      renderWithProviders(<LoginForm />);

      const renderedButton = screen.getByRole("button", { name: buttonText });

      expect(renderedButton).toBeInTheDocument();
    });

    describe("And when the user types 'admin' in the username input and 'password' in the password input", () => {
      it("Then it should show 'admin' in the username input and 'password' in the password input", async () => {
        const username = "admin";
        const password = "admin123";

        renderWithProviders(<LoginForm />);

        const renderedUsernameInput = screen.getByLabelText("Username");
        const renderedPasswordInput = screen.getByLabelText("Password");

        await userEvent.type(renderedUsernameInput, username);
        await userEvent.type(renderedPasswordInput, password);

        expect(renderedUsernameInput).toHaveValue(username);
        expect(renderedPasswordInput).toHaveValue(password);
      });

      it("Then the form should be reset when the user clicks the 'Login' button", async () => {
        const username = "admin";
        const password = "password";

        renderWithProviders(<LoginForm />);

        const renderedUsernameInput = screen.getByLabelText("Username");
        const renderedPasswordInput = screen.getByLabelText("Password");
        const renderedButton = screen.getByRole("button", { name: "Login" });

        await userEvent.type(renderedUsernameInput, username);
        await userEvent.type(renderedPasswordInput, password);
        await userEvent.click(renderedButton);

        expect(renderedUsernameInput).toHaveValue("");
        expect(renderedPasswordInput).toHaveValue("");
      });
    });
  });
});
