import React from "react";
import FormGroupStyled from "./FormGroupStyled";
import { type FontSizesProps } from "~/styles/utils/fontSizes";

export type FormFieldTypes =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "search"
  | "color"
  | "range"
  | "file"
  | "checkbox"
  | "radio"
  | "hidden"
  | "image"
  | "submit"
  | "reset"
  | "button";

export interface FormGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    FontSizesProps {
  inputOptions: React.HTMLAttributes<HTMLInputElement>;
  value: string;
  label?: string;
  type?: FormFieldTypes;
  required?: boolean;
  caption?: string;
  isDisabled?: boolean;
}

const FormGroup = ({
  caption,
  label,
  required,
  type,
  value,
  isDisabled = false,
  size = "md",
  inputOptions: { id, ...inputOptions },
}: FormGroupProps) => {
  return (
    <FormGroupStyled required={required} size={size}>
      <label htmlFor={id} className="form-group__label">
        {label && <span className="form-group__label-text">{label}</span>}
        <input
          type={type}
          value={value}
          required={required}
          className="form-group__input"
          disabled={isDisabled}
          id={id}
          {...inputOptions}
        />
      </label>
      <span className="form-group__caption">{caption}</span>
    </FormGroupStyled>
  );
};

export default FormGroup;
