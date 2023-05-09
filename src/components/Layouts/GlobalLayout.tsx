import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login, logout } from "@/store/reducers/authSlice";
import { getAccessTokenFromLocalStorage } from "@/libs/tokenHandler";
import { verifyTokenRequest } from "@/apis";
import Header from "../Header/Header";
import { ROUTE } from "@/constants";

interface IProps {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<IProps> = ({ children }) => {
  const route = useRouter();
  const dispatch = useDispatch();

  const validateToken = useCallback(async () => {
    const accessToken = getAccessTokenFromLocalStorage();

    if (!accessToken) {
      return;
    }

    try {
      const decoded = await verifyTokenRequest();
      dispatch(login(decoded));
    } catch (err) {
      dispatch(logout());
      alert("로그인이 만료되었습니다");
      route.push(ROUTE.MAIN);
    }
  }, [dispatch, route]);

  useEffect(() => {
    validateToken();
  }, [validateToken]);

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
