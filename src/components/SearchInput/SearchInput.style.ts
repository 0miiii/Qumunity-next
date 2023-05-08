import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #30363d;
  background-color: #21262d;
  color: #c9d1d9;
  height: 36px;
  padding: 5px;
  &::placeholder {
    color: #838c95;
  }
`;

export const Button = styled.button`
  color: #c9d1d9;
  background-color: #30363d;
  height: 36px;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 12px;
  cursor: pointer;
`;
