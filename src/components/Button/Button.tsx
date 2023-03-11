import { type HTMLAttributes, type PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";
import { type FontSizesProps } from "~/styles/utils/fontSizes";

type ButtonVariant = "primary" | "secondary" | "stroke" | "ghost";

type ButtonIconPosition = "start" | "center" | "end";

type ButtonType = "text" | "icon";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren,
    FontSizesProps {
  disabled?: boolean;
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
