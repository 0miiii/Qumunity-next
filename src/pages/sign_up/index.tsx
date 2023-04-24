import React from "react";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import * as Styled from "./index.style";

const AuthPage = () => {
  return (
    <Styled.Container>
      <div>로고</div>
      <SignUpForm />
    </Styled.Container>
  );
};

export default AuthPage;
