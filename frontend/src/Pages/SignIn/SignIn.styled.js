import styled from 'styled-components/macro';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.isReverse ? 'row-reverse' : 'row')};
`;

export const LogoWrapper = styled.div`
  width: calc(100% - 30px);
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
`;

export const SignWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SignContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;
