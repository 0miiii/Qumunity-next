import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useQuery } from "react-query";
import { getPosts } from "@/apis";
import { ROUTE } from "@/constants";
import Post from "@/components/Post/Post";
import SortButtons from "@/components/SortButtons/SortButtons";
import SearchInput from "@/components/SearchInput/SearchInput";

const btnList = ["newest", "votes", "views", "answered", "unanswered"];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 100;

  const searchHandler = (search: string) => {
    console.log("검색어:", search);
  };

  const sortHandler = (sort: string) => {
    console.log("정렬", sort);
  };

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
        <span>{posts?.length} 질문</span>
        <Link href={ROUTE.QUESTION}>질문하기</Link>
      </Top>
      <FilterGroup>
        <SearchInput onSearch={searchHandler} />
        <SortButtons btnList={btnList} onSort={sortHandler} />
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
  align-items: center;
`;

const PostGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
