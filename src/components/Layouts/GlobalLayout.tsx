import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.main`
  max-width: 840px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default GlobalLayout;
