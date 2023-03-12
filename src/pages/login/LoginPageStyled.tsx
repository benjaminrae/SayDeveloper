import styled from "styled-components";
import StyledPage from "~/styles/components/StyledPage";

const LoginPageStyled = styled(StyledPage)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  .login-page {
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 0.5rem;
      flex: 1.5;
    }

    &__graphic {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 2;

      img {
        min-width: 100%;
        object-fit: contain;
      }
    }

    &__separator {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      margin: 1rem 0;
      padding: 0 0.5rem;
      font-weight: bold;

      &:before,
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: currentColor;
      }

      &:before {
        background: linear-gradient(to right, transparent, currentColor);
        margin-right: 0.5rem;
      }

      &:after {
        background: linear-gradient(to left, transparent, currentColor);
        margin-left: 0.5rem;
      }
    }

    &__link {
      color: ${({ theme }) => theme.colors.support.blue};
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;

    .login-page {
      &__form {
        max-width: 400px;
      }

      &__graphic {
        display: none;
      }
    }
  }
`;

export default LoginPageStyled;
