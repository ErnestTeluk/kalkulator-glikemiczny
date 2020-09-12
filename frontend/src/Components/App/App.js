import React from 'react';
import { Router } from '@reach/router';

import Layout from 'Components/Layout/Layout';
import SignIn from 'Pages/SignIn/Sign';

const App = () => (
  <Layout>
    <Router>
      <SignIn path="/" />
    </Router>
  </Layout>
);

export default App;
