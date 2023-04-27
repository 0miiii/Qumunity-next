import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import { Button } from "@mui/material";
import { useScrollTop } from "@/hooks";
import { getPost, createAnswer, IAnswerCreateReq } from "@/apis";
import Tag from "@/components/Tag/Tag";
import Answer from "@/components/Answer/Answer";
import * as Styled from "./index.style";

const DetailPage = () => {
  useScrollTop();
  const { postId } = useRouter().query;
  const answerRef = useRef<HTMLTextAreaElement>(null);

  const { mutate, isLoading: isMuLoading } = useMutation(
    (answer: IAnswerCreateReq) => createAnswer(answer)
  );

  const { data, isError, isLoading } = useQuery(
    ["post", postId],
    () => getPost(postId as string),
    {
      enabled: !!postId,
    }
  );

  const answerSubmitHandler = () => {
    const enteredAnswer = answerRef.current?.value;

    if (!enteredAnswer) {
      return alert("내용을 입력해주세요");
    }

    mutate({
      postId: postId as string,
      content: enteredAnswer,
    });
  };

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

  return (
    <>
      <Styled.Detail>
        <Styled.DetailInfo>
          <div>
            <img
              src={data.post.author.photoURL}
              alt={data.post.author.nickname}
              style={{ width: "20px", height: "20px" }}
            />
            <span>{data.post.author.nickname}</span>
            <span>{data.post.createdAt}</span>
            <span>views: {data.post.views}</span>
            <span>votes: {data.post.votes}</span>
            <span>bookmark: 0</span>
          </div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </Styled.DetailInfo>
        <Styled.Content>
          <h1>{data.post.title}</h1>
          <p>{data.post.content}</p>
        </Styled.Content>
        <Styled.TagGroup>
          {data.post.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </Styled.TagGroup>
      </Styled.Detail>

      <Styled.AnswerInput>
        {isMuLoading ? <div>Loading...</div> : <textarea ref={answerRef} />}
        <Button variant="contained" onClick={answerSubmitHandler}>
          댓글 쓰기
        </Button>
      </Styled.AnswerInput>

      <Styled.AnswerGroup>
        {data.answers.map((answer) => (
          <Answer key={answer._id} answer={answer} />
        ))}
      </Styled.AnswerGroup>
    </>
  );
};

export default DetailPage;
