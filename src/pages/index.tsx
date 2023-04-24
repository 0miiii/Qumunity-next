import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { verifyTokenRequest, getPosts } from "@/apis";
import { login } from "@/store/reducers/authSlice";
import { ROUTE } from "@/constants";
import Post from "@/components/Post/Post";
import * as Styled from "@/pages/index.style";

export default function Home() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const { data: decodedToken, isSuccess: verifySuccess } = useQuery(
    "verify",
    verifyTokenRequest
  );
  if (verifySuccess) {
    dispatch(login(decodedToken.nickname));
  }
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery(["getPosts", currentPage], () => getPosts(currentPage, limit));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Styled.Top>
        <span>6 질문</span>
        <Link href={ROUTE.QUESTION}>질문페이지로이동</Link>
      </Styled.Top>
      <Styled.FilterGroup>
        <input type="text" />
        <div>정렬버튼</div>
      </Styled.FilterGroup>
      <Styled.PostGroup>
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Styled.PostGroup>
    </>
  );
}
