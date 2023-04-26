import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  border-bottom: 1px solid lightgrey;
  > li {
    flex-basis: 100%;
    padding: 15px;
    text-align: center;
    cursor: pointer;
  }

  > .border {
    color: #1976d2;
    border-bottom: 2px solid #1976d2;
  }
`;

export const Content = styled.div``;

export const Btn = styled.div`
  display: flex;
  > div {
    padding: 10px;
    width: 100px;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    color: var(--main-color-4);
    border: 2px solid var(--main-color-4);
    border-bottom: none;
    cursor: pointer;
    &:nth-child(1) {
      border-top-left-radius: 5px;
    }
    &:nth-child(2) {
      border-top-right-radius: 5px;
    }
  }
  > .border {
    background-color: var(--main-color-4);
    color: #fff;
  }
`;
