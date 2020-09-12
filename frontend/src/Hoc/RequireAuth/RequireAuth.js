import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const auth = useSelector((state) => state.Auth.authenticated);

    function shouldNavigateAway() {
      if (!auth) {
        navigate('/');
      }
    }

    useEffect(() => {
      shouldNavigateAway();
    });

    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};
