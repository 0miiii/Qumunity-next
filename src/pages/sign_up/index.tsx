import React from "react";
import styled from "styled-components";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <Container>
      <div>로고</div>
      <SignUpForm />
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

export default SignUpPage;
