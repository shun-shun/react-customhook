import styled from "styled-components";
import { FC } from "react";
import { UserProfile } from "../types/UserProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  return (
    <SContainer>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メールアドレス</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #ccc;
  border-radius: 8px;
  padding: 0 24px;
  margin: 8px;
`;
