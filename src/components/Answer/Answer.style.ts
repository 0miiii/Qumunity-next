import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    > img {
      border-radius: 5px;
    }
  }
`;
