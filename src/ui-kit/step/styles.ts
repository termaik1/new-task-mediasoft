import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile375: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    root: {
      height: ({ isMobile375 }) => isMobile375 ? 20 : 40,
      border: `1px solid ${theme.colors.silver}`,
      borderRadius: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      background: theme.colors.blue,
    },
    passed: {
      background: theme.colors.green,
    },
  })
);
