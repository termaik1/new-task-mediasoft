import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    goodsItem: {
      marginTop: 16,
      "&:first-child": {
        margin: 0,
      },
    },
    link: {
      textDecoration: 'none'
    }
  })
);
