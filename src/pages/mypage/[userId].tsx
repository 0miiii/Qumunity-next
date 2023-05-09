import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Profile from "@/components/Profile/Profile";
import MyContent from "@/components/MyContent/MyContent";
import Tab from "@/components/Tab/Tab";
import { getUserInfo } from "@/apis";

const MyPage = () => {
  const { userId } = useRouter().query;
  const { data, isLoading } = useQuery(
    "userinfo",
    () => getUserInfo(userId as string),
    {
      enabled: !!userId,
    }
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const tabMenu = [
    {
      title: "Questions",
      content: <MyContent content={data.userPosts} />,
    },
    {
      title: "Comments",
      // content: <MyContent content={data?.userAnswers} />,
      content: <div>준비중입니다</div>,
    },
    {
      title: "BookMarks",
      content: <div>준비중입니다</div>,
    },
  ];

  return (
    <>
      {data?.userInfo && <Profile user={data.userInfo} />}
      <Tab tabs={tabMenu} />
    </>
  );
};

MyPage.auth = true;

export default MyPage;
