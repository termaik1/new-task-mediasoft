import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile: boolean;
  isMobile375: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    root: {
      position: "fixed",
      overflowY: "auto",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: ({ isMobile375 }) =>
        isMobile375 ? theme.colors.white : theme.colors.blackGray_1,
      zIndex: 1000,
    },
    content: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: ({ isMobile375 }) => (isMobile375 ? 0 : "4%"),
    },
    container: {
      maxWidth: ({ isMobile }) => (isMobile ? 375 : "100%"),
      width: ({ isMobile }) => (isMobile ? "100%" : 440),
      background: theme.colors.white,
      padding: ({ isMobile, isMobile375 }) =>
        isMobile ? (isMobile375 ? 16 : 12) : 20,
    },
    close: {
      width: 24,
      height: 24,
      cursor: "pointer",
    },
    title: {
      width: "calc(100% - 24px)",
      textAlign: "center",
      fontWeight: 800
    },
  })
);
