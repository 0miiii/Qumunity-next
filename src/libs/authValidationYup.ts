import * as yup from "yup";

const EMAIL_VALIDATION = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PW_VALIDATION = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{8,12}$/;

export const SignUpSchema = yup
  .object({
    nickname: yup
      .string()
      .required("닉네임을 입력해주세요")
      .min(3, "3글자 이상 8글자 이하로 작성해 주세요")
      .max(8, "3글자 이상 8글자 이하로 작성해 주세요"),
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .matches(EMAIL_VALIDATION, "적절하지 않은 이메일입니다"),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요")
      .matches(
        PW_VALIDATION,
        "8 ~ 12 자리이며 특수문자, 숫자, 알파벳이 최소 하나씩 포함되어야 합니다."
      ),
    password_check: yup
      .string()
      .required("비밀번호를 다시 입력해주세요")
      .oneOf([yup.ref("password"), ""], "비밀번호가 일치하지 않습니다"),
  })
  .required();
