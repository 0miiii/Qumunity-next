import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Button } from "@mui/material";
import { useScrollTop } from "@/hooks";
import { getPost } from "@/apis";
import Tag from "@/components/Tag/Tag";
import * as Styled from "./index.style";

const DetailPage = () => {
  useScrollTop();
  const { postId } = useRouter().query;

  const {
    data: post,
    isError,
    isLoading,
  } = useQuery(["post", postId], () => getPost(postId as string), {
    enabled: !!postId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

  console.log(post);

  return (
    <>
      <Styled.Detail>
        <Styled.DetailInfo>
          <div>
            {/* <span>{post?.author.photoURL}</span> */}
            <span>{post?.author.nickname}</span>
            <span>{post?.createdAt}</span>
            <span>views:{post?.views}</span>
            <span>votes:1</span>
            <span>bookmark:0</span>
          </div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </Styled.DetailInfo>
        <Styled.Content>
          <h1>{post?.title}</h1>
          <p>{post?.content}</p>
        </Styled.Content>
        <Styled.TagGroup>
          {post?.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </Styled.TagGroup>
      </Styled.Detail>

      <Styled.AnswerInput>
        <textarea />
        <Button variant="contained">댓글 쓰기</Button>
      </Styled.AnswerInput>

      <Styled.AnswerGroup>
        <li>
          <div>
            <span>photo</span>
            <span>nickname</span>
            <span>date</span>
          </div>
          <p>내용</p>
        </li>
        <li>답변2</li>
        <li>답변3</li>
      </Styled.AnswerGroup>
    </>
  );
};

export default DetailPage;
