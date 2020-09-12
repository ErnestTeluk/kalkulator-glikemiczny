const breakpoints = {
  bigDesktop: 1400,
  desktop: 1200,
  bigTablet: 992,
  tablet: 768,
  bigPhone: 576,
  phone: 375,
};

export const Mq = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {});
