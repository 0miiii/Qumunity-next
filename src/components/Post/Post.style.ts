import styled from "styled-components";

export const Container = styled.li`
  width: 840px;
  height: 122px;
  display: flex;
  gap: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
  padding: 16px;
  font-size: 13px;
`;

export const State = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 100px;
  gap: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
`;

export const Top = styled.div`
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1:hover {
    color: #1976d2;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
  }
`;

export const Bot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagGroup = styled.ul`
  display: flex;
  gap: 4px;
`;

export const AuthorInfo = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
`;
