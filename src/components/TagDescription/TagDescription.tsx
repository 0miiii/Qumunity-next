import React from "react";
import Tag from "../Tag/Tag";
import * as Styled from "./TagDescription.style";

interface IProps {
  width?: string;
}

const TagDescription: React.FC<IProps> = ({ width }) => {
  return (
    <Styled.Container width={width}>
      <Tag name="# javascript" />
    </Styled.Container>
  );
};

export default TagDescription;
