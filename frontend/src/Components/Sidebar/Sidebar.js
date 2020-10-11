import React from 'react';

import LogoWhite from 'Assets/Image/LogoWhite.png';
import SignBackground from 'Assets/Image/SignBackground.png';
import LinkItems from 'Components/Sidebar/LinkItems/LinkItems';
import Avatar from 'Components/Sidebar/Avatar/Avatar';
import {
  SectionWrapper,
  LogoWrapper,
  StyledImage,
  BackgroundWrapper,
  AvatarWrapper,
  LinksWrapper,
} from './Sidebar.styled';

const Sidebar = () => (
  <SectionWrapper>
    <LogoWrapper>
      <StyledImage src={LogoWhite} />
    </LogoWrapper>
    <BackgroundWrapper imgUrl={SignBackground}>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <LinksWrapper>
        <LinkItems />
      </LinksWrapper>
    </BackgroundWrapper>
  </SectionWrapper>
);

export default Sidebar;
