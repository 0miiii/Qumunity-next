import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useQuery } from "react-query";
import { getPosts } from "@/apis";
import { ROUTE } from "@/constants";
import Post from "@/components/Post/Post";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 100;

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
      <Top>
        <span>6 질문</span>
        <Link href={ROUTE.QUESTION}>질문페이지로이동</Link>
      </Top>
      <FilterGroup>
        <input type="text" />
        <div>정렬버튼</div>
      </FilterGroup>
      <PostGroup>
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </PostGroup>
    </>
  );
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
