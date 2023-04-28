import React, { useState } from "react";
import { useQuery } from "react-query";
import Profile from "@/components/Profile/Profile";
import { getUsers } from "@/apis";
import * as Styled from "./index.style";

const UserListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 100;
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery("users", () => getUsers(currentPage, limit));

  if (isLoading) {
    return <div>로딩</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

  return (
    <>
      <Styled.FilterGroup>
        <input type="text" />
        <div>
          <button>qestion</button>
          <button>answer</button>
        </div>
      </Styled.FilterGroup>
      <Styled.UserList>
        {users?.map((user) => (
          <li key={user._id}>
            <Profile user={user} />
          </li>
        ))}
      </Styled.UserList>
    </>
  );
};

export default UserListPage;
