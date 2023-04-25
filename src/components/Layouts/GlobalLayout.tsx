import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "@/store/reducers/authSlice";
import { getAccessTokenFromLocalStorage } from "@/libs/tokenHandler";
import styled from "styled-components";
import Header from "../Header/Header";

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage();
    if (token) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, [children, dispatch]);

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
