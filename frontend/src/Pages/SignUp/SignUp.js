import React from 'react';

import LogoWhite from 'Assets/Image/LogoWhite.png';
import LogoColor from 'Assets/Image/LogoColor.png';
import SignBackground from 'Assets/Image/SignBackground.png';
import Sign from 'Components/Auth/Sign/Sign';
import SignOption from 'Components/Auth/SignOption/SignOption';
import { PageWrapper, SignWrapper, Logo } from 'Pages/SignIn/SignIn.styled';
import {
  OptionWrapper,
  SignOptionWrapper,
  LogoMobileWrapper,
  LogoWrapper,
} from './SignUp.styled';

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
      <LogoWrapper isDesktop>
        <Logo src={LogoColor} />
      </LogoWrapper>
      <SignWrapper>
        <Sign title={SignUpData.signTitle} text={SignUpData.signText} />
      </SignWrapper>
      <OptionWrapper imgUrl={SignBackground}>
        <LogoMobileWrapper>
          <Logo src={LogoWhite} />
        </LogoMobileWrapper>
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
