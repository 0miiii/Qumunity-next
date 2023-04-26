import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ROUTE } from "@/constants";
import { verifyTokenRequest } from "@/apis";
import { deleteAccessTokenFromLocalStorage } from "@/libs/tokenHandler";

interface Iprops {
  children: React.ReactNode;
}

export const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  const [loading, setIsLoading] = useState(true);
  const route = useRouter();

  const validateToken = useCallback(async () => {
    try {
      await verifyTokenRequest();
      setIsLoading(false);
    } catch (err) {
      alert("로그인이 필요합니다");
      deleteAccessTokenFromLocalStorage();
      return route.push(ROUTE.MAIN);
    }
  }, [route]);

  useEffect(() => {
    validateToken();
  }, [children, validateToken]);

  if (loading) {
    return <div>loading</div>;
  }

  return <>{children}</>;
};

// import { useQuery } from "react-query";

// const { data, isError, isFetching } = useQuery("verify", verifyTokenRequest);
// const route = useRouter();

// useEffect(() => {
//   if (isError) {
//     alert("로그인이 필요합니다");
//     deleteAccessTokenFromLocalStorage();
//     route.push(ROUTE.MAIN);
//   }
// }, [isError, route]);

// if (isFetching) {
//   return <div>Loading...</div>;
// }

// return <>{data && children}</>;
