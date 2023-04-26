import styled from "styled-components";

export const Detail = styled.div`
  width: 840px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
`;

export const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 13px;

  > div {
    display: flex;
    gap: 10px;
  }
`;

export const Content = styled.div`
  > h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  > p {
    min-height: 200px;
  }
`;

export const TagGroup = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AnswerInput = styled.section`
  width: 840px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;

  > textarea {
    padding: 5px;
    height: 150px;
    resize: none;
    border-radius: 5px;
  }
`;

export const AnswerGroup = styled.ul`
  width: 840px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
