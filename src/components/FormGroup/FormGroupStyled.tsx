import styled, { css } from "styled-components";
import { type FormGroupProps } from "./FormGroup";
import fontSizes from "~/styles/utils/fontSizes";

type FormGroupStyledProps = Pick<FormGroupProps, "size" | "type" | "required">;

const formGroupColors = css<FormGroupStyledProps>`
  .form-group {
    &__input {
      border-color: ${({ theme: { colors } }) => colors.greys.light};

      :focus:active:not(:disabled) {
        border-color: ${({ theme: { colors } }) => colors.primary};
      }

      :hover:not(:focus):not(:disabled) {
        border-color: ${({ theme: { colors } }) => colors.greys.dark};
      }

      :disabled {
        opacity: 0.3;
      }
    }

    &__caption {
      color: ${({ theme: { colors } }) => colors.support.red};
    }
  }
`;

const formGroupCursors = css<FormGroupStyledProps>`
  .form-group {
    &__input {
      :is(type="text", type="tel", type="url", type="email", type="password") {
        cursor: pointer;
      }

      :is(
          type="checkbox",
          type="radio",
          type="file",
          type="submit",
          type="reset",
          type="button"
        ) {
        cursor: pointer;
      }

      :is(
          type="date",
          type="time",
          type="datetime-local",
          type="month",
          type="week"
        ) {
        cursor: pointer;
      }

      :disabled {
        cursor: not-allowed;
      }
    }
  }
`;

const FormGroupStyled = styled.div<FormGroupStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .form-group {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      &-text:after {
        ${({ required }) => {
          if (required) {
            return {
              content: "'*'",
              color: "red",
            };
          }
        }}
      }
    }

    &__input {
      border: 2px solid currentColor;
      border-radius: ${({ theme: { sizes } }) => sizes.borderRadius};
      padding: 0.5rem;
    }

    &__caption {
      font-size: smaller;
      height: ${({
        size,
        theme: {
          typography: { sizes },
        },
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      }) => sizes[size!]};
    }
  }

  ${fontSizes}
  ${formGroupColors}
  ${formGroupCursors}
`;

export default FormGroupStyled;
