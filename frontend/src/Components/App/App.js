import React from 'react';
import { Router } from '@reach/router';

import Layout from 'Components/Layout/Layout';
import SignIn from 'Pages/SignIn/SignIn';
import SignUp from 'Pages/SignUp/SignUp';
import Dashboard from 'Pages/Dashboard/Dashboard';

const App = () => (
  <Layout>
    <Router>
      <SignIn path="/" />
      <SignUp path="/signup" />
      <Dashboard path="/dashboard" />
    </Router>
  </Layout>
);

export default App;
