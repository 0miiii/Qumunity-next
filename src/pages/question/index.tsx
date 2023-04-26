import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Button } from "@mui/material";
import { createPost } from "@/apis";
import TagInput from "@/components/TagInput/TagInput";
import { ROUTE } from "@/constants";
import * as Styled from "./index.style";

interface IEnteredPost {
  title: string;
  content: string;
  tags: string[];
}

const QuestionPage = () => {
  const route = useRouter();
  const [tags, setTags] = useState<string[]>([]);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (post: IEnteredPost) => createPost(post)
  );

  const submitHandler = async () => {
    const enteredTitle = titleInputRef.current?.value as string;
    const enteredContent = contentRef.current?.value as string;
    const enteredTags = tags;

    if (!enteredTitle || !enteredContent || enteredTags.length === 0) {
      return alert("모든 내용을 입력해주세요");
    }

    mutate({
      title: titleInputRef.current?.value as string,
      content: contentRef.current?.value as string,
      tags,
    });
  };

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (isSuccess) {
    route.push(ROUTE.MAIN);
    return null;
  }

  if (isError) {
    return <div>에러발생</div>;
  }

  return (
    <>
      <Styled.Form>
        <Styled.InputContainer>
          <label>제목을 입력해주세요</label>
          <input type="text" ref={titleInputRef} />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>내용을 입력해주세요</label>
          <textarea ref={contentRef} />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>태그를 입력해주세요</label>
          <TagInput tags={tags} setTags={setTags} />
        </Styled.InputContainer>

        <Button variant="contained" onClick={submitHandler}>
          글 작성하기
        </Button>
      </Styled.Form>
    </>
  );
};

QuestionPage.auth = true;

export default QuestionPage;
