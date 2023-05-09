import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ROUTE } from "@/constants";
import { RootState } from "@/store/store";

interface Iprops {
  children: React.ReactNode;
}

export const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  const route = useRouter();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) {
    alert("로그인이 필요합니다");
    route.push(ROUTE.SIGN_IN);
  }

  return <>{children}</>;
};
