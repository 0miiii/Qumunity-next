import React from "react";
import SignInForm from "@/components/SignInForm/SignInForm";
import * as Styled from "./index.style";

const AuthPage = () => {
  return (
    <Styled.Container>
      <div>로고</div>
      <SignInForm />
    </Styled.Container>
  );
};

export default AuthPage;
