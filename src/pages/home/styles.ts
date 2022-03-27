import { Theme } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

type TProps = {
  isMobile: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    productItem: {
      margin: '20px 20px 0 20px'
    },
  })
);
