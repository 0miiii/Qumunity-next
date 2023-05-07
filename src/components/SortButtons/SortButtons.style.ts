import styled from "styled-components";

interface IBtnProps {
  activity: boolean;
}

export const Container = styled.div`
  button {
    border: 1px solid rgba(240, 246, 252, 0.1);
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;

export const Button = styled.button<IBtnProps>`
  padding: 10px;
  color: #c9d1d9;
  background-color: ${(props) => (props.activity ? "#21262d" : "#30363d")};
  font-size: 12px;
  cursor: pointer;
`;
