import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile: boolean;
  isMobile375: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    root: {
      padding: ({ isMobile, isMobile375 }) =>
        isMobile ? (isMobile375 ? 4 : 14) : 28,
      background: theme.colors.white,
      boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.15)",
      borderRadius: 5,
      width: '100%'
    },
  })
);
