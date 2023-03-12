import React, { useCallback, useMemo, useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import { type FontSizesProps } from "~/styles/utils/fontSizes";
import { z } from "zod";
import debounce from "~/utils/debounce/debounce";

export interface LoginFormData extends Record<string, string> {
  username: string;
  password: string;
}

export type LoginFormFields = keyof LoginFormData;

export type LoginFormProps = FontSizesProps;

const LoginForm = ({ size }: LoginFormProps) => {
  const initialLoginFormData: LoginFormData = { username: "", password: "" };
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    ...initialLoginFormData,
  });
  const [loginFormCaptions, setLoginFormCaptions] = useState<LoginFormData>({
    ...initialLoginFormData,
  });
  const debounceTime = 500;

  const handleLoginFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    setLoginFormData((currentLoginFormData) => ({
      ...currentLoginFormData,
      [id]: value,
    }));
  };

  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateLoginForm();

    setLoginFormData({
      ...initialLoginFormData,
    });
  };

  const LoginFormSchema = z
    .object({
      username: z.string(),
      password: z.string(),
    })
    .required();

  const validateLoginForm = useCallback(() => {
    const loginFormValidation = LoginFormSchema.safeParse(loginFormData);

    if (!loginFormValidation.success) {
      const {
        error: { issues },
      } = loginFormValidation;

      const usernameError = issues.find(
        (issue) => issue.path[0] === "username"
      );
      const passwordError = issues.find(
        (issue) => issue.path[0] === "password"
      );

      const loginFormCaptions: LoginFormData = {
        username: usernameError ? usernameError.message : "",
        password: passwordError ? passwordError.message : "",
      };

      setLoginFormCaptions(loginFormCaptions);
    }

    console.log("Login form validation: ", loginFormValidation);

    return loginFormValidation;
  }, [LoginFormSchema, loginFormData]);

  const handleDebouncedValidation = useMemo(
    () => debounce(validateLoginForm, debounceTime),
    [validateLoginForm]
  );

  const handleShowPasswordClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setIsPasswordShown((currentIsPasswordShown) => !currentIsPasswordShown);
  };

  const [username, password]: LoginFormFields[] = ["username", "password"];
  const placeholderMessage = "Enter your ";

  return (
    <LoginFormStyled
      onSubmit={handleLoginFormSubmit}
      onChange={handleDebouncedValidation}
    >
      <FormGroup
        label="Username"
        inputOptions={{
          id: username,
          onChange: handleLoginFormChange,
          placeholder: username && `${placeholderMessage}${username}`,
        }}
        value={loginFormData.username}
        type="text"
        size={size}
        caption={loginFormCaptions.username}
      />

      <div className="login-form__password">
        <FormGroup
          className="login-form__password-input"
          label="Password"
          inputOptions={{
            id: password,
            onChange: handleLoginFormChange,
            placeholder: password && `${placeholderMessage}${password}`,
          }}
          value={loginFormData.password}
          type={isPasswordShown ? "text" : "password"}
          size={size}
          caption={loginFormCaptions.password}
        />
        <Button
          onClick={handleShowPasswordClick}
          variant="stroke"
          size="xs"
          className="login-form__password-toggle"
        >
          {isPasswordShown ? "Hide" : "Show"} Password
        </Button>
      </div>

      <Button size={size} className="login-form__submit-button">
        Login
      </Button>
    </LoginFormStyled>
  );
};

export default LoginForm;
