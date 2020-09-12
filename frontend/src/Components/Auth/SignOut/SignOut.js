import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';

import { SignOut } from 'State/Actions/Auth';

const Signout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SignOut());
    navigate('/');
  };

  return (
    <>
      <button type="submit" onClick={handleClick}>
        signOut
      </button>
    </>
  );
};

export default Signout;
