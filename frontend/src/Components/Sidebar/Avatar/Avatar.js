import React from 'react';
import { useSelector } from 'react-redux';

import { AvatarCircle, AvatarText, AvatarImage } from './Avatar.styled';

const Avatar = () => {
  const name = useSelector((state) => state.UserData.userData.name);
  const avatarUrl = useSelector((state) => state.Avatar.avatarData);

  return (
    <AvatarCircle>
      {avatarUrl === null ? (
        <>
          {name !== undefined ? (
            <AvatarText>{name.slice(0, 1)}</AvatarText>
          ) : (
            <AvatarText>A</AvatarText>
          )}
        </>
      ) : (
        <AvatarImage src={`http://localhost:8080/${avatarUrl.avatar}`} />
      )}
    </AvatarCircle>
  );
};

export default Avatar;
