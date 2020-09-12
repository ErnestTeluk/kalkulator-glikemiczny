import styled from 'styled-components/macro';

export const PageWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  ${({ theme }) => theme.Mq.bigTablet} {
    height: 100vh;
    flex-direction: ${(props) => (props.isReverse ? 'row-reverse' : 'row')};
  }
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.Mq.bigTablet} {
    width: 30%;
    padding: 0;
  }
`;

export const SignContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  ${({ theme }) => theme.Mq.bigTablet} {
    width: 70%;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;
