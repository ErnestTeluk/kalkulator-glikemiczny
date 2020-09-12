import React from 'react';

import LogoColor from 'Assets/Image/LogoColor.png';
import SignBackground from 'Assets/Image/SignBackground.png';
import Sign from 'Components/Auth/Sign/Sign';
import SignOption from 'Components/Auth/SignOption/SignOption';
import {
  PageWrapper,
  SignWrapper,
  SignContainer,
  OptionWrapper,
  LogoWrapper,
  Logo,
} from './SignIn.styled';

const SignIn = () => {
  const SignInData = {
    title: 'Witaj, Użytkowniku',
    text: 'Utwórz konto i zacznij przygodę z liczeniem indeksu glikemicznego',
    buttonText: 'Utwórz Konto',
    buttonLink: '/signup',
    signTitle: 'Zaloguj się do kalkulatora',
    signText: 'i policzy indeks swojego wymarzonego dania',
  };

  return (
    <PageWrapper>
      <SignContainer>
        <LogoWrapper>
          <Logo src={LogoColor} />
        </LogoWrapper>
        <SignWrapper>
          <Sign title={SignInData.signTitle} text={SignInData.signText} />
        </SignWrapper>
      </SignContainer>
      <OptionWrapper imgUrl={SignBackground}>
        <SignOption
          title={SignInData.title}
          text={SignInData.text}
          buttonText={SignInData.buttonText}
          buttonLink={SignInData.buttonLink}
        />
      </OptionWrapper>
    </PageWrapper>
  );
};

export default SignIn;
