import styled from 'styled-components/macro';

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.Colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 5px;
  border: 10px solid ${({ theme }) => theme.Colors.white};
`;
