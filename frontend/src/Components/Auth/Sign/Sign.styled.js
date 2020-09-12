import styled from 'styled-components/macro';

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding-top: 300px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.xxl};
  font-weight: ${({ theme }) => theme.FontWeight.bold};
  color: ${({ theme }) => theme.Colors.purple};
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.FontFamily.Montserrat};
  font-size: ${({ theme }) => theme.FontSize.xs};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
  text-align: center;
  margin-bottom: 30px;
`;
