import React, { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useScrollTop } from "@/hooks";
import { getPost, createAnswer, deletePost, IAnswerCreateReq } from "@/apis";
import { RootState } from "@/store/store";
import Tag from "@/components/Tag/Tag";
import Answer from "@/components/Answer/Answer";
import { ROUTE } from "@/constants";

const DetailPage = () => {
  useScrollTop();
  const { _id } = useSelector((state: RootState) => state.auth);
  const route = useRouter();
  const { postId } = route.query;
  const answerRef = useRef<HTMLTextAreaElement>(null);

  const { data, isError, isLoading, refetch } = useQuery(
    ["post", postId],
    () => getPost(postId as string),
    {
      enabled: !!postId,
    }
  );

  const { mutate: createMutate, isLoading: isCreateLoading } = useMutation(
    (answer: IAnswerCreateReq) => createAnswer(answer),
    { onSuccess: () => refetch() }
  );

  const { mutate: deleteMutate } = useMutation(
    (postId: string) => deletePost(postId),
    { onSuccess: () => route.push(ROUTE.MAIN) }
  );

  const answerSubmitHandler = () => {
    const enteredAnswer = answerRef.current?.value;
    if (!enteredAnswer) {
      return alert("내용을 입력해주세요");
    }
    createMutate({
      postId: postId as string,
      content: enteredAnswer,
    });
  };

  const postDeleteHandler = () => {
    deleteMutate(postId as string);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h3>게시물을 가져오는 중에 문제가 발생했습니다.</h3>;
  }

  return (
    <>
      <Detail>
        <DetailInfo>
          <div>
            <img
              src={data?.post.author.photoURL}
              alt={data?.post.author.nickname}
              style={{ width: "20px", height: "20px" }}
            />
            <span>{data?.post.author.nickname}</span>
            <span>{data?.post.createdAt}</span>
            <span>views: {data?.post.views}</span>
            <span>votes: {data?.post.votes}</span>
            <span>bookmark: 0</span>
          </div>
          {data?.post.author._id === _id ? (
            <div>
              <button>수정</button>
              <button onClick={postDeleteHandler}>삭제</button>
            </div>
          ) : (
            <button>추천</button>
          )}
        </DetailInfo>
        <Content>
          <h1>{data?.post.title}</h1>
          <p>{data?.post.content}</p>
        </Content>
        <TagGroup>
          {data?.post.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </TagGroup>
      </Detail>

      <AnswerInput>
        {isCreateLoading ? <div>Loading...</div> : <textarea ref={answerRef} />}
        <Button
          variant="contained"
          onClick={answerSubmitHandler}
          disabled={isCreateLoading}
        >
          댓글 쓰기
        </Button>
      </AnswerInput>

      <AnswerGroup>
        {data?.answers.map((answer) => (
          <Answer key={answer._id} answer={answer} />
        ))}
      </AnswerGroup>
    </>
  );
};

export const Detail = styled.div`
  width: 840px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
`;

export const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 13px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
      border-radius: 5px;
    }
  }
`;

export const Content = styled.div`
  > h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  > p {
    min-height: 200px;
  }
`;

export const TagGroup = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AnswerInput = styled.section`
  width: 840px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;

  > textarea {
    padding: 5px;
    height: 150px;
    resize: none;
    border-radius: 5px;
  }
`;

export const AnswerGroup = styled.ul`
  width: 840px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default DetailPage;
