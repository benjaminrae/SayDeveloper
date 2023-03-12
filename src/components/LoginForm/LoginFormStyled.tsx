import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .login-form {
    &__submit-button {
      margin-top: 1rem;
    }

    &__password {
      position: relative;

      &-toggle {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;

export default LoginFormStyled;
