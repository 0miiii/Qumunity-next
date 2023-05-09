import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ROUTE } from "@/constants";
import { RootState } from "@/store/store";

interface Iprops {
  children: React.ReactNode;
}

export const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const route = useRouter();

  if (!isLoggedIn) {
    route.push(ROUTE.SIGN_IN);
  }

  return <>{children}</>;
};
