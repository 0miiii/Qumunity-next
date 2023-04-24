import Link from "next/link";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { verifyTokenRequest } from "@/apis";
import { login } from "@/store/reducers/authSlice";
import Post from "@/components/Post/Post";
import * as Styled from "@/pages/index.style";

export default function Home() {
  const { data, isSuccess } = useQuery("verify", verifyTokenRequest);
  const dispatch = useDispatch();
  if (isSuccess) {
    dispatch(login(data.nickname));
  }
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
