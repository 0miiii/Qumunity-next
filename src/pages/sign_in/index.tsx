import React from "react";
import styled from "styled-components";
import SignInForm from "@/components/SignInForm/SignInForm";

const SignInPage = () => {
  return (
    <Container>
      <div>로고</div>
      <SignInForm />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
`;

export default SignInPage;
