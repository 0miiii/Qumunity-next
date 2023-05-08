import React, { useState } from "react";
import * as Styled from "./SearchInput.style";

interface IProps {
  onSearch: (search: string) => void;
}

const SearchInput: React.FC<IProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const inputKeyPressHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      onSearch(keyword);
    }
  };

  const buttonClickHandler = () => {
    onSearch(keyword);
  };

  return (
    <Styled.Container>
      <Styled.Input
        type="text"
        value={keyword}
        onChange={inputChangeHandler}
        onKeyDown={inputKeyPressHandler}
        placeholder="검색어를 입력하세요..."
      />
      <Styled.Button onClick={buttonClickHandler}>검색</Styled.Button>
    </Styled.Container>
  );
};

export default SearchInput;
