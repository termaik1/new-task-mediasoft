import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    box: {
      paddingLeft: "calc((100% - 1440px) / 2)",
      paddingRight: "calc((100% - 1440px) / 2)",
      [theme.breakpoints.down(theme.breakpoints.values.desktop)]: {
        paddingLeft: "164px",
        paddingRight: "164px",
      },
      [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
        maxWidth: "calc(100% - 40px)",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      [theme.breakpoints.down(theme.breakpoints.values.mobile768)]: {
        maxWidth: "calc(100% - 32px)",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      [theme.breakpoints.down(theme.breakpoints.values.mobile375)]: {
        maxWidth: "calc(100% - 24px)",
        paddingLeft: "12px",
        paddingRight: "12px",
      },
    },
    indent: {
      paddingTop: ({ isMobile }) => (isMobile ? 24 : 48),
      paddingBottom: ({ isMobile }) => (isMobile ? 24 : 48),
    },
    largeText: {
      fontSize: ({ isMobile }) => `${isMobile ? 16 : 18}px !important`,
      lineHeight: ({ isMobile }) => `${isMobile ? 24 : 26}px !important`,
    },
    smallText: {
      fontSize: ({ isMobile }) => `${isMobile ? 14 : 16}px !important`,
      lineHeight: ({ isMobile }) => `${isMobile ? 20 : 24}px !important`,
    },
    captionText: {
      fontSize: ({ isMobile }) => `${isMobile ? 12 : 14}px !important`,
      lineHeight: ({ isMobile }) => `${isMobile ? 16 : 20}px !important`,
    },
    helperTeg: {
      fontSize: `12px !important`,
      lineHeight: "16px !important",
    },
  })
);
