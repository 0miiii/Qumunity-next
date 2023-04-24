import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* border: 1px solid #30363d; */
  border-radius: 5px;

  input {
    width: 100%;
    padding: 5px;
    border: none;
  }
`;

export const TagGroup = styled.ul`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  /* gap: 5px; */

  > li {
    margin-right: 5px;
  }
`;
