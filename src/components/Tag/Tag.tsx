import React from "react";
import * as Styled from "./Tag.style";

interface Props {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => {
  return <Styled.Container>{name}</Styled.Container>;
};

export default Tag;
