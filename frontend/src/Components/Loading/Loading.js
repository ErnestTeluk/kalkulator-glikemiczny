import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { LoadingWrapper, DotsWrapper, Dot } from './Loading.styled';

const Loading = () => {
  const DotsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    Array.from(DotsRef.current.children).forEach((element) => {
      tl.to(element, 0.3, { backgroundColor: '#00cec9', ease: 'none' });
    });
  });

  return (
    <LoadingWrapper>
      <DotsWrapper ref={DotsRef}>
        <Dot />
        <Dot />
        <Dot />
      </DotsWrapper>
    </LoadingWrapper>
  );
};

export default Loading;
