import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.colors.blackGray}`,
      borderRadius: 5,
      padding: 8,
      width: 300,
    },
    pageItem: {
      width: 34,
      height: 34,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pageActive: {
      borderRadius: 5,
      background: theme.colors.blue_1
    },
    showMore: {
      width: 160
    }

  })
  
);
