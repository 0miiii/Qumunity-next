import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import Profile from "@/components/Profile/Profile";
import { getUsers } from "@/apis";

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
      <FilterGroup>
        <input type="text" />
        <div>
          <button>qestion</button>
          <button>answer</button>
        </div>
      </FilterGroup>
      <UserList>
        {users?.map((user) => (
          <li key={user._id}>
            <Profile user={user} />
          </li>
        ))}
      </UserList>
    </>
  );
};

const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export default UserListPage;
