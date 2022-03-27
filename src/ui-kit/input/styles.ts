import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    error: {
      marginTop: 4,
      color: theme.colors.red,
    },
  })
);
