import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Post from "../Post/Post";
import { IAnswer, IPost } from "@/types";
import * as Styled from "./MyContent.style";

interface IProps {
  content: IPost[];
  // content: IPost[] | IAnswer[] | undefined;
}

const MyContent: React.FC<IProps> = ({ content }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;
  const maxPage = content && Math.ceil(content.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = currentPage * limit;
  const sliceContent = content && content.slice(startIndex, endIndex);

  const pageHandler = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Styled.ListContainer>
        {sliceContent?.map((post) => (
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
