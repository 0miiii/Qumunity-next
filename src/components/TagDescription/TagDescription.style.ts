import styled from "styled-components";

interface IProps {
  width?: string;
}

export const Container = styled.li<IProps>`
  width: ${(props) => props.width || "100%"};
  height: 200px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
