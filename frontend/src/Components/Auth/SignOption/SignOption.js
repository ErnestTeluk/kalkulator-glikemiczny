import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionWrapper,
  Title,
  Text,
  Button,
  ButtonText,
} from './SignOption.styled';

const SignOption = (props) => {
  const { text, title, buttonText, buttonLink } = props;

  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button to={buttonLink}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </SectionWrapper>
  );
};

SignOption.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default SignOption;
