import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  > img {
    border-radius: 5px;
    width: 70px;
    height: 70px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
