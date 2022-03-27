import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Theme } from "@material-ui/core";

type TProps = {
  isMobile: boolean;
  isMobile375: boolean;
};

export default makeStyles<Theme, TProps>((theme) =>
  createStyles({
    root: {
      maxWidth: ({ isMobile, isMobile375 }) =>
        isMobile ? (isMobile375 ? 200 : 280) : 400,
      width: "100%",
    },

    info: {
      borderRight: ({ isMobile }) =>
        isMobile ? 0 : `1px solid ${theme.colors.blackGray}`,
      paddingRight: ({ isMobile }) => (isMobile ? 0 : 20),
      display: ({ isMobile }) => isMobile ? 'flex' : 'block',
      flexDirection: 'column',
      alignItems: 'center'
    },

    img: {
      width: 200,
      height: 200,
      marginRight: ({ isMobile }) => (isMobile ? 0 : 40),
    },
  })
);
