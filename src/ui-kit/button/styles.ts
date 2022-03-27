import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    root: {
      height: ({ isMobile }) => (isMobile ? 28 : 36),
      borderRadius: 5,
      "&:hover": {
        background: theme.colors.green,
        color: theme.colors.blackGray,
      },
    },
    gray: {
      background: theme.colors.gray,
      color: theme.colors.white,
    },
    blue: {
      background: theme.colors.blue,
      color: theme.colors.white,
    },
    disabled: {
      background: theme.colors.silver,
      color: theme.colors.blackGray
    }
  })
);
