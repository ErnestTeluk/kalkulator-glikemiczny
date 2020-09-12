import React from 'react';

import SignOut from 'Components/Auth/SignOut/SignOut';
import RequireAuth from 'Hoc/RequireAuth/RequireAuth';

const Dashboard = () => (
  <>
    Silence is gold
    <br />
    <SignOut />
  </>
);

export default RequireAuth(Dashboard);
