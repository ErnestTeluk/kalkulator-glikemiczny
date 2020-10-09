import styled from 'styled-components/macro';

import {
  SvgWrapper,
  TextWrapper,
} from 'Components/Sidebar/LinkItems/LinkItems.styled';
import { AvatarCircle } from 'Components/Sidebar/Avatar/Avatar.styled';

export const LogoWrapper = styled.div`
  width: 100%;
  height: 145px;
  background-color: ${({ theme }) => theme.Colors.darkGrey};
  display: flex;
  padding: 0 30px;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: padding 0.3s ease-in-out;

  ::after {
    content: '';
    width: 20px;
    height: 100%;
    background-color: ${({ theme }) => theme.Colors.darkGrey};
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const SectionWrapper = styled.div`
  width: 300px;
  max-width: 100px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transition: max-width 0.3s ease-in-out;

  &:hover {
    max-width: 300px;
  }

  &:hover ${LogoWrapper} {
    padding: 0 49px;
  }

  &:hover ${AvatarCircle} {
    max-width: 200px;
    max-height: 200px;
  }

  &:hover ${SvgWrapper} {
    max-width: 60px;
    max-height: 60px;
  }

  &:hover ${TextWrapper} {
    opacity: 1;
  }
`;

export const StyledImage = styled.img`
  width: 202px;
  height: auto;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: calc(100% - 145px);
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
