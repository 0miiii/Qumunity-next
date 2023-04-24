import * as Styled from "@/pages/index.style";
import Link from "next/link";
import Post from "@/components/Post/Post";

export default function Home() {
  return (
    <>
      <Styled.Top>
        <span>6 질문</span>
        <Link href="/question">질문페이지로이동</Link>
      </Styled.Top>
      <Styled.FilterGroup>
        <input type="text" />
        <div>정렬버튼</div>
      </Styled.FilterGroup>
      {/* {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))} */}
    </>
  );
}
