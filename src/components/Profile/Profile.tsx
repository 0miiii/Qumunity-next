import React from "react";
import { IUser } from "../../types/user";
import * as Styled from "./Profile.style";

interface IProps {
  user: IUser;
}

const Profile: React.FC<IProps> = ({ user }) => {
  return (
    <Styled.Container>
      <img src={user.photoURL} alt={user.nickname} />
      <div>
        <span>{user.nickname}</span>
        <span>Qestions: {user.questions}</span>
        <span>Answers: {user.answers}</span>
      </div>
    </Styled.Container>
  );
};

export default Profile;
