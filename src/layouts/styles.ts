import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    main: {
      minHeight: "calc(100vh - 48px - 58px)",
      height: "100%",
    },
  })
);
