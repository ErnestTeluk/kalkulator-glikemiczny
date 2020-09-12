import React from 'react';

import Sidebar from 'Components/Sidebar/Sidebar';
import { PageWrapper, SectionWrapper } from './Dashboard.styled';

const Dashboard = () => (
  <PageWrapper>
    <Sidebar />
    <SectionWrapper>
      Silence is gold
      <br />
    </SectionWrapper>
  </PageWrapper>
);

export default Dashboard;
