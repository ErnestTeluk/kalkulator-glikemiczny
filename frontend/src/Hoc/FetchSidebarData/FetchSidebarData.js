import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FetchUserData } from 'State/Actions/UserData';
import { FetchAvatar } from 'State/Actions/Avatar';

export default (ChildComponent) => {
  const ComposeComponent = () => {
    const id = useSelector((state) => state.UserData.userData._id);
    const dispatch = useDispatch();

    function GetSiderbarData() {
      dispatch(FetchUserData());
    }

    function GetAvatar() {
      dispatch(FetchAvatar(id));
    }

    useEffect(() => {
      GetSiderbarData();
      GetAvatar();
    });

    return <ChildComponent />;
  };

  return ComposeComponent;
};
