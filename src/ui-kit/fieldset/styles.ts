import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme =>
  createStyles({
    root: {
      border: `1px solid ${theme.colors.silver}`,
      boxSizing: 'border-box'
    },
    legend: {
      marginLeft: 24,
      padding: '0 26px 0 8px'
    },
    content: {
      padding: 8
    }
  })
);
