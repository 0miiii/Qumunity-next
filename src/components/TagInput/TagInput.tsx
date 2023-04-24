import React from "react";
import Tag from "../Tag/Tag";
import * as Styled from "./TagInput.style";

interface ITagInput {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagInput: React.FC<ITagInput> = ({ tags, setTags }) => {
  const tagAddedHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      const enteredTag = event.currentTarget.value.trim();
      const isInclude = tags.includes(`# ${event.currentTarget.value.trim()}`);
      if (!enteredTag || isInclude || tags.length > 4) {
        event.currentTarget.value = "";
        return;
      }
      setTags((preTags) => [...preTags, `# ${enteredTag}`]);
      event.currentTarget.value = "";
    }
  };

  return (
    <Styled.Container>
      <Styled.TagGroup>
        {tags.map((el) => (
          <li key={el}>
            <Tag name={el} />
          </li>
        ))}
      </Styled.TagGroup>
      <input
        type="text"
        onKeyUp={tagAddedHandler}
        placeholder="태그는 5개까지 입력 가능합니다"
      />
    </Styled.Container>
  );
};

export default TagInput;
