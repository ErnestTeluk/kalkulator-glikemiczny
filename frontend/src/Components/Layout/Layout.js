import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { Theme } from 'Utils/Theme/Theme';
import { GlobalStyle, SiteWrapper } from './Layout.styled';

const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyle />
      <SiteWrapper>{children}</SiteWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
