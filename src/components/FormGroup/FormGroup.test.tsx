import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import renderWithProviders from "~/testUtils/renderWithProviders";
import FormGroup from "./FormGroup";

describe("Given a FormGroup component", () => {
  describe("When it is rendered with a label 'Label' and id 'input'", () => {
    it("Then it should show an input with label 'Label' on the screen", () => {
      const labelText = "Label";

      renderWithProviders(
        <FormGroup label={labelText} value="" inputOptions={{ id: "input" }} />
      );

      const renderedLabel = screen.getByLabelText(labelText);

      expect(renderedLabel).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a caption 'Caption'", () => {
    it("Then it should show a caption with text 'Caption' on the screen", () => {
      const captionText = "Caption";

      renderWithProviders(
        <FormGroup
          caption={captionText}
          value=""
          inputOptions={{ id: "input" }}
        />
      );

      const renderedCaption = screen.getByText(captionText);

      expect(renderedCaption).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a placeholder 'Placeholder' and no initial value", () => {
    it("Then it should show an input with placeholder 'Placeholder' on the screen", () => {
      const placeholderText = "Placeholder";

      renderWithProviders(
        <FormGroup
          value=""
          inputOptions={{ id: "input", placeholder: placeholderText }}
        />
      );

      const renderedInput = screen.getByPlaceholderText(placeholderText);

      expect(renderedInput).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a value 'Value'", () => {
    it("Then it should show an input with value 'Value' on the screen", () => {
      const valueText = "Value";

      renderWithProviders(
        <FormGroup value={valueText} inputOptions={{ id: "input" }} />
      );

      const renderedInput = screen.getByDisplayValue(valueText);

      expect(renderedInput).toBeInTheDocument();
    });
  });

  describe("When it is rendered with required true", () => {
    it("Then it should show an input with required true on the screen", () => {
      const labelText = "Label";

      renderWithProviders(
        <FormGroup
          required
          value=""
          inputOptions={{ id: "input" }}
          label={labelText}
        />
      );

      const renderedInput = screen.getByLabelText(labelText);

      expect(renderedInput).toBeRequired();
    });
  });
});
