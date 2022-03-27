import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > div": {
        width: "100% !important",
      },
    },
  })
);
