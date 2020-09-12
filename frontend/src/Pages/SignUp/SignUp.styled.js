import styled from 'styled-components/macro';

export const OptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  flex-flow: column;
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

export const LogoWrapper = styled.div`
  width: calc(100% - 30px);
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;

  ${({ theme }) => theme.Mq.bigTablet} {
    display: none;
  }
`;

export const LogoMobileWrapper = styled.div`
  width: calc(100% - 30px);
  height: 100px;
  display: none;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;

  ${({ theme }) => theme.Mq.bigTablet} {
    display: flex;
  }
`;

export const SignOptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
