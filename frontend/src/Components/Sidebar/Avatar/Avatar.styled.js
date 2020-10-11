import styled from 'styled-components/macro';

export const AvatarText = styled.span`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.m};
  font-weight: ${({ theme }) => theme.FontWeight.bold};
  color: ${({ theme }) => theme.Colors.white};
`;

export const AvatarCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  max-width: 40px;
  max-height: 40px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.Colors.white};
  background-color: ${({ theme }) => theme.Colors.purple};
  border-radius: 50%;
  transition: max-width 0.3s ease-in-out, max-height 0.3s ease-in-out;
`;

export const AvatarImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
