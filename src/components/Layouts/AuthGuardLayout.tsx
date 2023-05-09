import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ROUTE } from "@/constants";
import { RootState } from "@/store/store";

interface Iprops {
  children: React.ReactNode;
}

export const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const route = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다");
      route.push(ROUTE.SIGN_IN);
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, route]);

  if (loading) {
    return <div>loading...</div>;
  }

  return <>{children}</>;
};
