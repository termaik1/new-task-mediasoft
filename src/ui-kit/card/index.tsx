import React, { FC } from "react";

import { useMobile } from 'app/hooks/use.mobile.hook'

import styles from "./styles";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: FC<TProps> = ({ children, className = "" }) => {
  const { isMobile, isMobile375 } = useMobile()
  const classes = styles({ isMobile, isMobile375 });

  return <div className={`${classes.root} ${className}`}>{children}</div>;
};
