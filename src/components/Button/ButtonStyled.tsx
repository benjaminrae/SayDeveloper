import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";

type ButtonStyledProps = ButtonProps;

const buttonStyle = css`
  cursor: pointer;
  font-weight: 600;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const buttonSizes = css<ButtonStyledProps>`
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadius};

  ${(props) => {
    switch (props.size) {
      case "xs":
        return {
          padding: "4px 8px",
          "font-size": "0.75rem",
        };
      case "sm":
        return { padding: "4px 12px", "font-size": "0.875rem" };
      case "md":
        return { padding: "8px 16px", "font-size": "1rem" };
      case "lg":
        return { padding: "12px 16px", "font-size": "1.125rem" };
      case "xl":
        return { padding: "16px 26px", "font-size": "1.25rem" };
    }
  }};
`;

const buttonColors = css<ButtonStyledProps>`
  border: 1px solid currentColor;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return {
          color: props.theme.colors.white,
          "background-color": props.theme.colors.primary,
        };
      case "secondary":
        return {
          color: props.theme.colors.white,
          "background-color": props.theme.colors.secondary,
        };
      case "ghost":
        return {
          color: props.theme.colors.greys.dark,
          "background-color": "transparent",
          border: `1px solid transparent`,
        };
      case "stroke":
        return {
          color: props.theme.colors.black,
          "background-color": props.theme.colors.white,
          border: `1px solid ${props.theme.colors.greys.dark}`,
        };
      default:
        return props.theme.colors.white;
    }
  }};

  &:hover {
    ${(props) => {
      switch (props.variant) {
        case "primary":
          return {
            "background-color": props.theme.colors.primaryHover,
          };
        case "secondary":
          return {
            "background-color": props.theme.colors.secondaryHover,
          };
        case "ghost":
          return {
            color: props.theme.colors.black,
            "background-color": props.theme.colors.ghost,
            border: `1px solid transparent`,
          };
        case "stroke":
          return {
            "background-color": props.theme.colors.hover,
            border: `1px solid ${props.theme.colors.black}`,
          };
        default:
          return props.theme.colors.white;
      }
    }};
  }
`;

const iconStyle = css<ButtonStyledProps>``;

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${(props) => props.semantic === "text" && buttonStyle}
  ${(props) => props.semantic === "icon" && iconStyle}
  ${buttonSizes}
  ${buttonColors}
`;

export default ButtonStyled;
