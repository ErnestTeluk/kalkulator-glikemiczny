import React from 'react';
import { Router } from '@reach/router';

import Layout from 'Components/Layout/Layout';
import SignIn from 'Pages/SignIn/SignIn';
import SignUp from 'Pages/SignUp/SignUp';

const App = () => (
  <Layout>
    <Router>
      <SignIn path="/" />
      <SignUp path="/signup" />
    </Router>
  </Layout>
);

export default App;
