import Link from "next/link";
import React from "react";
import Button from "~/components/Button/Button";
import LoginForm from "~/components/LoginForm/LoginForm";
import { type FontSizes } from "~/styles/utils/fontSizes";
import LoginPageStyled from "./LoginPageStyled";
import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const loginPageSize: FontSizes = "lg";

  return (
    <>
      <>
        <Head>
          <title>Login to SayDeveloper</title>
        </Head>
      </>
      <LoginPageStyled>
        <section className="login-page__form">
          <h1>Welcome back</h1>
          <p>Please enter your details</p>
          <LoginForm size={loginPageSize} />
          <span className="login-page__separator">or</span>
          <Button
            size={loginPageSize}
            variant="secondary"
            onClick={() => void signIn()}
          >
            Login with another provider
          </Button>
          <span>
            Forgot your password?{" "}
            <Link className="login-page__link" href="/reset-password">
              Reset your password here
            </Link>
          </span>
          <footer>
            Don&apos;t have an account?{" "}
            <Link className="login-page__link" href="/register">
              Register here
            </Link>
          </footer>
        </section>

        <section className="login-page__graphic">
          <Image
            alt="Login to SayDeveloper"
            src="/images/login.svg"
            width={500}
            height={500}
          />
        </section>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
