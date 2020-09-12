import styled from 'styled-components/macro';
import { Form, Field } from 'formik';

import ErrorIcon from 'Assets/Svg/ErrorIcon.svg';

export const StyledForm = styled(Form)`
  position: relative;
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const FieldError = styled.span`
  font-family: ${({ theme }) => theme.FontFamily.Monstserrat};
  font-size: ${({ theme }) => theme.FontSize.xs};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
  position: absolute;
  top: 50px;
  left: 30px;
  ::after {
    content: '';
    background-image: url(${ErrorIcon});
    position: absolute;
    top: -1px;
    left: -20px;
    width: 18px;
    height: 18px;
  }
`;

export const StyledField = styled(Field)`
  font-family: ${({ theme }) => theme.FontFamily.Monstserrat};
  font-size: ${({ theme }) => theme.FontSize.s};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
  background-color: ${({ theme }) => theme.Colors.lightPurple};
  border: ${({ isError }) =>
    isError ? '1px solid #d63031' : '1px solid #EFE8FF'};
  display: block;
  width: 300px;
  padding: 10px;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
  position: relative;
  text-indent: 25px;
  transition: background-color 0.3s ease-in-out;
  :focus {
    background-color: ${({ theme }) => theme.Colors.white};
    outline: none;
  }
`;

export const StyledErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledError = styled.span`
  font-family: ${({ theme }) => theme.FontFamily.Monstserrat};
  color: ${({ theme }) => theme.Colors.red};
  font-size: ${({ theme }) => theme.FontSize.s};
  font-weight: ${({ theme }) => theme.FontWeight.bold};
  position: relative;
  ::after {
    content: '';
    background-image: url(${(props) => props.svgUrl});
    position: absolute;
    top: 0;
    left: -20px;
    width: 18px;
    height: 18px;
  }
`;

export const MailIconWrapper = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 32px;
  left: 10px;
`;

export const PasswordIconWrapper = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 101px;
  left: 10px;
`;

export const ShowIconWrapper = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 101px;
  right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.FontFamily.Monstserrat};
  font-size: ${({ theme }) => theme.FontSize.s};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.white};
  background-color: ${({ theme }) => theme.Colors.purple};
  width: 150px;
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  :hover {
    background-color: #bcb5ff;
  }
`;
