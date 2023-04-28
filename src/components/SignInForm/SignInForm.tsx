import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { TextField, Button } from "@mui/material";
import { signInRequest, type ISignInUserInfo } from "@/apis";
import { ROUTE } from "@/constants";
import { saveAuthInfoInLocalStorage } from "@/libs/tokenHandler";
import * as Styled from "./SignInForm.style";

const SignInForm = () => {
  const route = useRouter();
  const {
    data: response,
    isLoading,
    isSuccess,
    mutate,
    isError,
  } = useMutation((enteredInput: ISignInUserInfo) =>
    signInRequest(enteredInput)
  );

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    mutate({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  };

  if (isSuccess) {
    saveAuthInfoInLocalStorage(response);
    route.push(ROUTE.MAIN);
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Styled.Container onSubmit={loginSubmitHandler}>
      <TextField
        name="email"
        label="이메일"
        variant="outlined"
        type="email"
        required
        defaultValue="test@naver.com"
        disabled={isLoading}
      />
      <TextField
        name="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        required
        defaultValue="aaaaaa1!"
        disabled={isLoading}
      />
      <Button variant="contained" type="submit" disabled={isLoading}>
        로그인
      </Button>
      <p>아직 회원이 아니신가요?</p>
      <Button variant="contained" onClick={() => route.push(ROUTE.SIGN_UP)}>
        회원가입
      </Button>
      <p>게스트 계정으로 둘러보고 싶어요</p>
      <Button variant="contained">게스트 계정 로그인</Button>
    </Styled.Container>
  );
};

export default SignInForm;
