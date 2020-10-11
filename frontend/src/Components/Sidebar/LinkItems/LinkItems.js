import React, { useRef, useEffect } from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import gsap from 'gsap';

import { SignOut } from 'State/Actions/Auth';
import { ReactComponent as Calc } from 'Assets/Svg/Calc.svg';
import { ReactComponent as SaveMeals } from 'Assets/Svg/SaveMeals.svg';
import { ReactComponent as ProductTable } from 'Assets/Svg/ProductTable.svg';
import { ReactComponent as Settings } from 'Assets/Svg/Settings.svg';
import { ReactComponent as Signout } from 'Assets/Svg/Signout.svg';
import { LinkItem, SvgWrapper, TextWrapper } from './LinkItems.styled';

const LinkItems = () => {
  const dispatch = useDispatch();

  const calcRef = useRef(null);
  const mealsRef = useRef(null);
  const productRef = useRef(null);
  const settingRef = useRef(null);
  const signoutRef = useRef(null);

  const CalcTl = gsap.timeline({ paused: true, repeat: -1 });
  const MealTl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
  const ProductTl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
  const SettingTl = gsap.timeline({ paused: true, repeat: -1 });
  const SignoutTl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

  useEffect(() => {
    const [calcElements] = calcRef.current.children;
    const FirstButton = calcElements.getElementById('firstButton');
    const SecondButton = calcElements.getElementById('secondButton');
    const ThirdButton = calcElements.getElementById('thirdButton');

    CalcTl.to(FirstButton, 0.5, { fill: '#d63031' })
      .to(FirstButton, 0.5, { fill: '#6C5CE7' })
      .to(SecondButton, 0.5, {
        fill: '#d63031',
      })
      .to(SecondButton, 0.5, {
        fill: '#6C5CE7',
      })
      .to(ThirdButton, 0.5, {
        fill: '#d63031',
      })
      .to(ThirdButton, 0.5, {
        fill: '#6C5CE7',
      });

    const [mealsElements] = mealsRef.current.children;
    const Meal = mealsElements.getElementById('meal');

    MealTl.to(Meal, 1, {
      rotate: '20deg',
      transformOrigin: 'center center',
      ease: 'none',
    });

    const [productElements] = productRef.current.children;
    const ProductFirst = productElements.getElementById('productFirst');
    const ProductSecond = productElements.getElementById('productSecond');
    const ProductThird = productElements.getElementById('productThird');

    ProductTl.to(ProductFirst, 0.5, { fill: '#d63031' })
      .to(ProductSecond, 0.5, { fill: '#d63031' })
      .to(ProductThird, 0.5, { fill: '#d63031' });

    const [settingElements] = settingRef.current.children;
    const FirstGear = settingElements.getElementById('firstGear');
    const SecondGear = settingElements.getElementById('secondGear');

    SettingTl.addLabel('rotate')
      .to(
        FirstGear,
        5,
        {
          rotate: '360deg',
          transformOrigin: 'center center',
          ease: 'none',
        },
        'rotate'
      )
      .to(
        SecondGear,
        5,
        {
          rotate: '360deg',
          transformOrigin: 'center center',
          ease: 'none',
        },
        'rotate'
      );

    const [signoutElements] = signoutRef.current.children;
    const Arrow = signoutElements.getElementById('arrow');

    SignoutTl.to(Arrow, 0.5, { x: '5' });
  });

  const handleClick = () => {
    dispatch(SignOut());
    navigate('/');
  };

  return (
    <>
      <LinkItem
        to="/dashboard"
        onMouseEnter={() => CalcTl.play()}
        onMouseLeave={() => CalcTl.restart().pause()}
      >
        <SvgWrapper ref={calcRef}>
          <Calc />
        </SvgWrapper>
        <TextWrapper>Kalkulator</TextWrapper>
      </LinkItem>
      <LinkItem
        to="/dashboard"
        onMouseEnter={() => MealTl.play()}
        onMouseLeave={() => MealTl.restart().pause()}
      >
        <SvgWrapper ref={mealsRef}>
          <SaveMeals />
        </SvgWrapper>
        <TextWrapper>Zapisane posiłki</TextWrapper>
      </LinkItem>
      <LinkItem
        to="/dashboard"
        onMouseEnter={() => ProductTl.play()}
        onMouseLeave={() => ProductTl.restart().pause()}
      >
        <SvgWrapper ref={productRef}>
          <ProductTable />
        </SvgWrapper>
        <TextWrapper>Tabela produktów</TextWrapper>
      </LinkItem>
      <LinkItem
        to="/dashboard"
        onMouseEnter={() => SettingTl.play()}
        onMouseLeave={() => SettingTl.restart().pause()}
      >
        <SvgWrapper ref={settingRef}>
          <Settings />
        </SvgWrapper>
        <TextWrapper>Ustawienia</TextWrapper>
      </LinkItem>
      <LinkItem
        as="button"
        onClick={handleClick}
        onMouseEnter={() => SignoutTl.play()}
        onMouseLeave={() => SignoutTl.restart().pause()}
      >
        <SvgWrapper ref={signoutRef}>
          <Signout />
        </SvgWrapper>
        <TextWrapper>Wyloguj</TextWrapper>
      </LinkItem>
    </>
  );
};

export default LinkItems;
