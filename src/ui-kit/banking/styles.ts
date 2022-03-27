import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile375?: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    root: {
      width: ({ isMobile375 }) => (isMobile375 ? 240 : 320),
      padding: ({ isMobile375 }) => (isMobile375 ? "10px 5px" : "25px 15px"),
      position: "relative",
      height: 144
    },
    animation: {
      transformStyle: "preserve-3d",
      animation: "$sideAnimation 1.0s",
      zIndex: 1000
    },
    imgHolder: {
      position: "absolute",
      height: "100%",
      backgroundColor: theme.colors.blackGray,
      left: 0,
      top: 0,
      width: "100%",
      borderRadius: "15px",
      overflow: "hidden",
    },
    img: {
      maxWidth: "100%",
      display: "block",
      maxHeight: "100%",
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
    inputRoot: {
      zIndex: 1000,
      width: "calc(100% - 40px)",
    },
    bankingLabel: {
      display: "block",
      color: theme.colors.white,
      marginBottom: 8,
    },
    bankingValue: {
      color: theme.colors.white,
    },
    "@keyframes sideAnimation": {
      "0%": {
        transform: "rotateY(90deg)",
      },

      "100%": {
        transform: "rotateY(0deg)",
      },
    },
    mask: {
      border: "none",
      outline: "none",
    }
  })
);
