import styled from 'styled-components/macro';
import { Link } from '@reach/router';

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.xxl};
  font-weight: ${({ theme }) => theme.FontWeight.bold};
  color: ${({ theme }) => theme.Colors.white};
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.m};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.white};
  text-align: center;
  margin-bottom: 20px;
  padding: 0 100px;
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.s};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
  transition: color 0.3s ease-in-out;
`;

export const Button = styled(Link)`
  width: 150px;
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.Colors.white};
  box-shadow: 0 12px 24px rgba(34, 51, 49, 0.13);
  transition: box-shadow 0.3s ease-in-out;
  text-align: center;
  text-decoration: none;
  :hover {
    box-shadow: none;
    text-decoration: none;
  }
  :hover ${ButtonText} {
    color: ${({ theme }) => theme.Colors.purple};
  }
`;
