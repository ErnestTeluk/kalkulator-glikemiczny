import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from 'Components/Sidebar/Sidebar';
import Loading from 'Components/Loading/Loading';
import FetchSideBarData from 'Hoc/FetchSidebarData/FetchSidebarData';
import { PageWrapper, SectionWrapper } from './Dashboard.styled';

const Dashboard = () => {
  const isLoading = useSelector((state) => state.Loading.isLoading);

  return (
    <PageWrapper>
      <Sidebar />
      {isLoading === true ? <Loading /> : null}
      <SectionWrapper>
        Silence is gold
        <br />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FetchSideBarData(Dashboard);
