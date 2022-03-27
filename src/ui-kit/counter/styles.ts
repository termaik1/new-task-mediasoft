import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      width: 100,
    },
    icon: {
      width: 28,
      height: 28,
      cursor: "pointer",
    },
    value: {
      width: 28,
      height: 28,
      border: `1px solid ${theme.colors.gray}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
  })
);
