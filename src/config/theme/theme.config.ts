import { createTheme } from "@material-ui/core";

export const configTheme = {
  colors: {
    white: "#FFFFFF",
    blue: "#1866FF",
    blue_1: "#18ACFF",
    silver: '#BFBFBF',
    blackGray: "#1F2229",
    blackGray_1: "#1F222980",
    gray: "#AB9EBB",
    green: '#7DEB6B',
    red: '#B73934'
  },
};

export const customTheme = createTheme({
  colors: configTheme.colors,
  breakpoints: {
    values: {
      desktop: 1440,
      mobile: 1023,
      mobile768: 768,
      mobile375: 375,
    },
  },
});
