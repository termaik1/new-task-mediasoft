import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 480
    },
    container: {
      width: 'calc(100% - 40px)',
      padding: '0 4px 0 4px 0'
    },
    stepInfoItem: {
      width: '20%',
      height: 24
    },
    formRowForm: {
      width: '44%'
    },
  })
);
