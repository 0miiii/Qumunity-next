import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { RootState } from "@/store/store";
import Post from "../Post/Post";
import { getUserPost } from "@/apis";
import * as Styled from "./MyContent.style";

const MyContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { _id, questions } = useSelector((state: RootState) => state.auth);
  const { data, isLoading, isError } = useQuery(
    ["content", currentPage],
    () => getUserPost(_id as string, currentPage, limit),
    { enabled: !!_id }
  );
  const limit = 4;
  const maxPage = questions && Math.ceil(questions / limit);

  const pageHandler = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <>
      <Styled.ListContainer>
        {data?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Styled.ListContainer>
      <Pagination
        count={maxPage}
        page={currentPage}
        onChange={pageHandler}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};

export default MyContent;
