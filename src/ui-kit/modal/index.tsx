import React, { FC, useEffect } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { Portal } from "./portal";

import CloseIcon from "@material-ui/icons/Close";
import stylesApp from "app/config/theme";
import styles from "./styles";

export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

interface IProps extends TModalProps {
  children: React.ReactNode;
  title: string;
}

export const Modal: FC<IProps> = ({
  isOpen,
  children,
  title,
  onClose = () => {},
}) => {
  const { isMobile, isMobile375 } = useMobile();
  const classes = styles({ isMobile, isMobile375 });
  const classesApp = stylesApp({ isMobile });

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  const onStopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={classes.root} onClick={onClose}>
            <div className={classes.content}>
              <div className={classes.container} onClick={onStopPropagation}>
                <Grid container>
                  <div className={`${classes.title} ${classesApp.largeText}`}>
                    {title}
                  </div>
                  <CloseIcon className={classes.close} onClick={onClose} />
                </Grid>
                <Box sx={{ mt: isMobile ? (isMobile375 ? 2 : 3) : 4 }}>
                  {children}
                </Box>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
