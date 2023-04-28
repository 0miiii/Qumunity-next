import styled from "styled-components";

export const ListContainer = styled.ul`
  margin-bottom: 10px;
  height: 488px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  > li {
    box-shadow: none;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: none;
  }
`;
