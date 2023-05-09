import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { SignUpSchema } from "../../libs/authValidationYup";
import { saveAccessTokenInLocalStorage } from "@/libs/tokenHandler";
import { ROUTE } from "@/constants";
import { signUpRequest, type ISignUpUserInfo } from "@/apis";
import * as Styled from "./SignUpForm.style";

type FormData = yup.InferType<typeof SignUpSchema>;

const SignUpForm = () => {
  const { data, isLoading, isSuccess, mutate } = useMutation(
    (enteredInput: ISignUpUserInfo) => signUpRequest(enteredInput),
    {
      onError: (error) => {
        console.error("회원가입실패:", error);
        alert("회원가입에 실패했습니다.");
      },
    }
  );
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  const SignUpSubmitHandler = handleSubmit(async (data) => {
    mutate({
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    });
  });

  if (isSuccess) {
    saveAccessTokenInLocalStorage(data.token);
    route.push(ROUTE.MAIN);
  }

  return (
    <Styled.Container onSubmit={SignUpSubmitHandler}>
      <TextField
        {...register("nickname")}
        label="닉네임"
        variant="outlined"
        error={!!errors.nickname}
        helperText={errors.nickname?.message}
        disabled={isLoading}
      />
      <TextField
        {...register("email")}
        label="이메일"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        type="email"
        disabled={isLoading}
      />
      <TextField
        {...register("password")}
        label="비밀번호"
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password"
        disabled={isLoading}
      />
      <TextField
        {...register("password_check")}
        label="비밀번호 확인"
        variant="outlined"
        error={!!errors.password_check}
        helperText={errors.password_check?.message}
        type="password"
        disabled={isLoading}
      />
      <Button variant="contained" type="submit" disabled={isLoading}>
        가입하기
      </Button>
    </Styled.Container>
  );
};

export default SignUpForm;
