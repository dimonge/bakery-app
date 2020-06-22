import { LightTheme } from "baseui";

const breakpoints = {
  small: 769,
  medium: 1024,
  large: 1216,
};

const ResponsiveTheme = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc.mediaQuery[key] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {},
  }
);

export const MyTheme = { ...LightTheme, ...ResponsiveTheme };
