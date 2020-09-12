import React from 'react';
import PropTypes from 'prop-types';

import { SectionWrapper, FormWrapper, Title, Text } from './Sign.styled';

const Sign = (props) => {
  const { title, text } = props;

  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <FormWrapper>
        {/* {window.location.pathname === '/' ? <SignInForm /> : null}
          {window.location.pathname === '/signup' ? <SignUpForm /> : null} */}
      </FormWrapper>
    </SectionWrapper>
  );
};

Sign.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Sign;
