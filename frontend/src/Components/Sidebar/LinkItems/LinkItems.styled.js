import styled from 'styled-components/macro';
import { Link } from '@reach/router';

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  width: 300px;
  height: auto;
  margin-bottom: 20px;
  text-decoration: none;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;

  &:last-child() {
    margin-bottom: 0px;
  }
`;

export const SvgWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 30px;
  max-width: 40px;
  max-height: 40px;
  transition: max-width 0.3s ease-in-out, max-height 0.3s ease-in-out;
`;

export const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.s};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.white};
  margin-left: 10px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
`;
