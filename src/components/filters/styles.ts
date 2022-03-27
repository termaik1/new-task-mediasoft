import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      width: "initial",
    },
    item: {
      marginLeft: 20,
      cursor: 'pointer',
      "&:first-child": {
        margin: 0,
      },
    },

    icon: {
      width: 20,
      height: 20,
      marginLeft: 12,
    },
  })
);
