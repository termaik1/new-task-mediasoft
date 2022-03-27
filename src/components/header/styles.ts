import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      background: theme.colors.gray,
      paddingTop: 16,
      paddingBottom: 16,
    },
    link: {
      textDecoration: "none",
      color: theme.colors.blackGray,
    },
  })
);
