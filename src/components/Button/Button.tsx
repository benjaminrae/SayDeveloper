import { type HTMLAttributes, type PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonVariant = "primary" | "secondary" | "stroke" | "ghost";

type ButtonIconPosition = "start" | "center" | "end";

type ButtonType = "text" | "icon";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  position?: ButtonIconPosition;
  semantic?: ButtonType;
}

const Button = ({
  children,
  disabled = false,
  position = "center",
  size = "md",
  variant = "primary",
  semantic = "text",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      disabled={disabled}
      size={size}
      variant={variant}
      position={position}
      semantic={semantic}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
