import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      background: theme.colors.gray,
      width: "100%",
      padding: "16px 0 16px 0",
    },
  })
);
