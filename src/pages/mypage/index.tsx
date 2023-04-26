import React from "react";
import Profile from "@/components/Profile/Profile";
import Tab from "@/components/Tab/Tab";

const tabMenu = [
  { title: "Questions", content: <div>컨텐츠1</div> },
  { title: "Comments", content: <div>컨텐츠2</div> },
  { title: "BookMarks", content: <div>컨텐츠3</div> },
];

const MyPage = () => {
  return (
    <>
      <div>MyPage</div>
      <Tab tabs={tabMenu} />
    </>
  );
};

MyPage.auth = true;

export default MyPage;
