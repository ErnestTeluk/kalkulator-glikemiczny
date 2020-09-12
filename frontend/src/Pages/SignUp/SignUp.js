import React from 'react';

import LogoWhite from 'Assets/Image/LogoWhite.png';
import SignBackground from 'Assets/Image/SignBackground.png';
import Sign from 'Components/Auth/Sign/Sign';
import SignOption from 'Components/Auth/SignOption/SignOption';
import {
  PageWrapper,
  SignWrapper,
  LogoWrapper,
  Logo,
} from 'Pages/SignIn/SignIn.styled';
import { OptionWrapper, SignOptionWrapper } from './SignUp.styled';

const SignUp = () => {
  const SignUpData = {
    title: 'Witaj, ponownie',
    text: 'Jeśli masz już konto, zaloguj się. Brakowało nam Ciebie!',
    buttonText: 'Zaloguj Się',
    buttonLink: '/',
    signTitle: 'Utwórz Konto',
    signText: 'i zacznij przygode z liczenie indeksu dań',
  };

  return (
    <PageWrapper isReverse>
      <SignWrapper>
        <Sign title={SignUpData.signTitle} text={SignUpData.signText} />
      </SignWrapper>
      <OptionWrapper imgUrl={SignBackground}>
        <LogoWrapper>
          <Logo src={LogoWhite} />
        </LogoWrapper>
        <SignOptionWrapper>
          <SignOption
            title={SignUpData.title}
            text={SignUpData.text}
            buttonText={SignUpData.buttonText}
            buttonLink={SignUpData.buttonLink}
          />
        </SignOptionWrapper>
      </OptionWrapper>
    </PageWrapper>
  );
};

export default SignUp;
