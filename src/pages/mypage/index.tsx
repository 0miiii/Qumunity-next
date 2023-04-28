import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Profile from "@/components/Profile/Profile";
import MyContent from "@/components/MyContent/MyContent";

import Tab from "@/components/Tab/Tab";
import { IUser } from "@/types";

const MyPage = () => {
  const { isLoggedIn, _id, answers, nickname, photo, questions } = useSelector(
    (state: RootState) => state.auth
  );

  const userinfo = {
    _id,
    answers,
    photoURL: photo,
    questions,
    nickname,
  };

  const tabMenu = [
    {
      title: "Questions",
      content: <MyContent />,
    },
    {
      title: "Comments",
      content: <MyContent />,
    },
    {
      title: "BookMarks",
      content: <MyContent />,
    },
  ];

  return (
    <>
      {userinfo && <Profile user={userinfo} />}
      <Tab tabs={tabMenu} />
    </>
  );
};

MyPage.auth = true;

export default MyPage;
