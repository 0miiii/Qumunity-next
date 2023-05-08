import React, { useState } from "react";
import * as Styled from "./SortButtons.style";

interface IProps {
  onSort: (sort: string) => void;
  btnList: string[];
}

interface ButtonObject {
  id: string;
  title: string;
  value: string;
}

const createButtonObjects = (btnList: string[]): ButtonObject[] => {
  return [...new Set(btnList)].reduce((acc: ButtonObject[], cur, idx) => {
    const title = cur[0].toUpperCase() + cur.slice(1);
    return [...acc, { id: idx.toString(), title, value: cur }];
  }, []);
};

const SortButtons: React.FC<IProps> = ({ onSort, btnList }) => {
  const [activity, setActivity] = useState("0");
  const btnObjList = createButtonObjects(btnList);

  const btnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSort(event.currentTarget.value);
    setActivity(event.currentTarget.id);
  };

  return (
    <Styled.Container>
      {btnObjList.map((btn) => (
        <Styled.Button
          key={btn.id}
          id={btn.id}
          type="button"
          value={btn.value}
          onClick={btnHandler}
          activity={activity === btn.id}
        >
          {btn.title}
        </Styled.Button>
      ))}
    </Styled.Container>
  );
};

export default SortButtons;
