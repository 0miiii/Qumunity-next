import React from "react";
import * as Styled from "./Answer.style";
import { IAnswer } from "@/types";

interface IProps {
  answer: IAnswer;
}

const Answer: React.FC<IProps> = ({ answer }) => {
  return (
    <Styled.Container>
      <div>
        <img
          src={answer.author.photoURL}
          alt={answer.author.nickname}
          style={{ width: "20px", height: "20px" }}
        />
        <span>{answer.author.nickname}</span>
        <span>{answer.createdAt}</span>
      </div>
      <p>{answer.content}</p>
    </Styled.Container>
  );
};

export default Answer;
