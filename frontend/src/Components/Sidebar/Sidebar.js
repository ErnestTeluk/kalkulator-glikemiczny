import React from 'react';

import LogoWhite from 'Assets/Image/LogoWhite.png';
import SignBackground from 'Assets/Image/SignBackground.png';
import LinkItems from 'Components/Sidebar/LinkItems/LinkItems';
import {
  SectionWrapper,
  LogoWrapper,
  StyledImage,
  BackgroundWrapper,
  AvatarWrapper,
  Avatar,
  AvatarText,
  LinksWrapper,
} from './Sidebar.styled';

const Sidebar = () => (
  <SectionWrapper>
    <LogoWrapper>
      <StyledImage src={LogoWhite} />
    </LogoWrapper>
    <BackgroundWrapper imgUrl={SignBackground}>
      <AvatarWrapper>
        <Avatar>
          <AvatarText>E</AvatarText>
        </Avatar>
      </AvatarWrapper>
      <LinksWrapper>
        <LinkItems />
      </LinksWrapper>
    </BackgroundWrapper>
  </SectionWrapper>
);

export default Sidebar;
