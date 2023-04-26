import React, { useState } from "react";
import * as Styled from "./Tab.style";

interface ITab {
  title: string;
  content: React.ReactNode;
}

interface IProps {
  tabs: ITab[];
}

const Tab: React.FC<IProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabArr = tabs.map((tab, idx) => {
    return { ...tab, id: idx };
  });

  const handleTab = (idx: number) => {
    setCurrentTab(idx);
  };

  return (
    <Styled.Container>
      <Styled.Menu>
        {tabArr.map((tab, idx) => {
          return (
            <li
              key={tab.id}
              onClick={() => handleTab(idx)}
              className={currentTab === idx ? "border" : undefined}
            >
              {tab.title}
            </li>
          );
        })}
      </Styled.Menu>
      <Styled.Content>{tabArr[currentTab].content}</Styled.Content>
    </Styled.Container>
  );
};

export default Tab;
