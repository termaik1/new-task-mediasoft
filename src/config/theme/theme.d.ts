import "@material-ui/core";

declare module "@material-ui/core/styles/createBreakpoints" {
  export interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    desktop: true;
    mobile: true;
    mobile768: true
    mobile375: true;
  }
}


declare module "@material-ui/core" {
  export interface ThemeOptions {
    colors: {
      white: string;
      blue: string;
      blue_1: string;
      silver: string;
      blackGray: string;
      blackGray_1: string;
      gray: string;
      green: string;
      red: string;
    };
  }

  export interface Theme extends ThemeOptions {}

  export interface DefaultTheme extends Theme {}
}
