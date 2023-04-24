import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { RootState } from "../../store/store";
import { ROUTE } from "@/constants";
import { logout } from "@/store/reducers/authSlice";
import * as Styled from "./Header.style";

const Header = () => {
  const location = useRouter().pathname;
  const dispatch = useDispatch();
  const { isLoggedIn, nickname } = useSelector(
    (state: RootState) => state.auth
  );
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Styled.Container>
      <Styled.Inner>
        <div>
          <Link href={ROUTE.MAIN}>로고</Link>
        </div>
        <Styled.Nav>
          <ul>
            <Styled.NavLi focus={ROUTE.MAIN === location}>
              <Link href={ROUTE.MAIN}>질문</Link>
            </Styled.NavLi>
            <Styled.NavLi focus={ROUTE.USER_LIST === location}>
              <Link href={ROUTE.USER_LIST}>유저</Link>
            </Styled.NavLi>
            <Styled.NavLi focus={ROUTE.TAG_LIST === location}>
              <Link href={ROUTE.TAG_LIST}>태그</Link>
            </Styled.NavLi>
          </ul>
        </Styled.Nav>
        {isLoggedIn ? <div>{nickname}님 환영합니다</div> : null}
        <Styled.BtnGroup>
          <li>
            <Link href={isLoggedIn ? ROUTE.MYPAGE : ROUTE.SIGN_IN}>
              <Button variant="contained">
                {isLoggedIn ? "마이페이지" : "로그인"}
              </Button>
            </Link>
          </li>
          <li>
            <Link href={isLoggedIn ? ROUTE.SIGN_IN : ROUTE.SIGN_UP}>
              <Button
                variant="contained"
                onClick={isLoggedIn ? logoutHandler : undefined}
              >
                {isLoggedIn ? "로그아웃" : "회원가입"}
              </Button>
            </Link>
          </li>
        </Styled.BtnGroup>
      </Styled.Inner>
    </Styled.Container>
  );
};

export default Header;
