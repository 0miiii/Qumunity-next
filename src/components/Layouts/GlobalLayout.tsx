import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "@/store/reducers/authSlice";
import { getAuthInfoFromLocalStorage } from "@/libs/tokenHandler";
import styled from "styled-components";
import Header from "../Header/Header";

interface IProps {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { token, user } = getAuthInfoFromLocalStorage();
    if (token && user) {
      dispatch(login(user));
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
