import React from "react";
import Link from "next/link";
import { IPost } from "../../types/post";
import Tag from "../Tag/Tag";
import { transformCreatedAt } from "../../libs/timeago";
import * as Styled from "./Post.style";

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {
  const createdAt = transformCreatedAt(post.createdAt);

  return (
    <Styled.Container>
      <Styled.State>
        <li>{post.views} views</li>
        <li>{post.answers} answers</li>
        <li>{post.votes} votes</li>
      </Styled.State>
      <Styled.Content>
        <Styled.Top>
          <h1>
            <Link href={`/detail/${post._id}`}>{post.title}</Link>
          </h1>
          <p>{post.content}</p>
        </Styled.Top>
        <Styled.Bot>
          <Styled.TagGroup>
            {post.tags.map((el) => (
              <li key={el}>
                <Tag name={el} />
              </li>
            ))}
          </Styled.TagGroup>
          <Styled.AuthorInfo>
            <li>
              <img src={post.author.photoURL} />
            </li>
            <li>{post.author.nickname}</li>
            <li>{createdAt}</li>
          </Styled.AuthorInfo>
        </Styled.Bot>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Post;
