import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';

import { SignOut } from 'State/Actions/Auth';
import { ReactComponent as Calc } from 'Assets/Svg/Calc.svg';
import { ReactComponent as SaveMeals } from 'Assets/Svg/SaveMeals.svg';
import { ReactComponent as ProductTable } from 'Assets/Svg/ProductTable.svg';
import { ReactComponent as Settings } from 'Assets/Svg/Settings.svg';
import { ReactComponent as Signout } from 'Assets/Svg/Signout.svg';
import { LinkItem, SvgWrapper, TextWrapper } from './LinkItems.styled';

const LinkItems = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SignOut());
    navigate('/');
  };

  return (
    <>
      <LinkItem to="/dashboard">
        <SvgWrapper>
          <Calc />
        </SvgWrapper>
        <TextWrapper>Kalkulator</TextWrapper>
      </LinkItem>
      <LinkItem to="/dashboard">
        <SvgWrapper>
          <SaveMeals />
        </SvgWrapper>
        <TextWrapper>Zapisane posiłki</TextWrapper>
      </LinkItem>
      <LinkItem to="/dashboard">
        <SvgWrapper>
          <ProductTable />
        </SvgWrapper>
        <TextWrapper>Tabela produktów</TextWrapper>
      </LinkItem>
      <LinkItem to="/dashboard">
        <SvgWrapper>
          <Settings />
        </SvgWrapper>
        <TextWrapper>Ustawienia</TextWrapper>
      </LinkItem>
      <LinkItem as="button" onClick={handleClick}>
        <SvgWrapper>
          <Signout />
        </SvgWrapper>
        <TextWrapper>Wyloguj</TextWrapper>
      </LinkItem>
    </>
  );
};

export default LinkItems;
