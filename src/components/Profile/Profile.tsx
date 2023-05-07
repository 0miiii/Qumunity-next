import React from "react";
import { IUser } from "../../types/user";
import * as Styled from "./Profile.style";

interface IUserinfo {
  _id: string | undefined;
  nickname: string | undefined;
  photoURL: string | undefined;
  questions: number | undefined;
  answers: number | undefined;
}

interface IProps {
  user: IUser | IUserinfo;
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
