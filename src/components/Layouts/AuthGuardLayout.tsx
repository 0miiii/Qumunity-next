import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ROUTE } from "@/constants";
import { verifyTokenRequest } from "@/apis";
import { deleteAccessTokenFromLocalStorage } from "@/libs/tokenHandler";

interface Iprops {
  children: React.ReactNode;
}

export const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  const { isLoading, isError } = useQuery("verify", () => verifyTokenRequest());
  const route = useRouter();

  useEffect(() => {
    if (isError) {
      alert("로그인이 필요합니다");
      deleteAccessTokenFromLocalStorage();
      route.push(ROUTE.MAIN);
    }
  }, [isError, route]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
