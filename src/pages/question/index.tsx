import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Button } from "@mui/material";
import { createPost } from "@/apis";
import TagInput from "@/components/TagInput/TagInput";
import { ROUTE } from "@/constants";

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
      <Form>
        <InputContainer>
          <label>제목을 입력해주세요</label>
          <input type="text" ref={titleInputRef} />
        </InputContainer>

        <InputContainer>
          <label>내용을 입력해주세요</label>
          <textarea ref={contentRef} />
        </InputContainer>

        <InputContainer>
          <label>태그를 입력해주세요</label>
          <TagInput tags={tags} setTags={setTags} />
        </InputContainer>

        <Button variant="contained" onClick={submitHandler}>
          글 작성하기
        </Button>
      </Form>
    </>
  );
};

QuestionPage.auth = true;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  width: 840px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;

  > Input {
    padding: 5px;
  }

  > textarea {
    padding: 5px;
    height: 250px;
    resize: none;
  }
`;

export default QuestionPage;
