import React, { FC } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";

import styles from "./styles";
import stylesApp from "app/config/theme";

type TProps = {
  children: React.ReactNode;
  isActive?: boolean;
  label?: string;
};

export const BankingLabel: FC<TProps> = ({
  isActive = false,
  label,
  children,
}) => {
  const { isMobile, isMobile375 } = useMobile();
  const classes = styles({ isMobile375 });
  const classesApp = stylesApp({ isMobile });

  return (
    <div className={classes.inputRoot}>
      {label && (
        <label className={`${classesApp.smallText} ${classes.bankingLabel}`}>
          {label}
        </label>
      )}
      <div className={`${classesApp.smallText} ${classes.bankingValue}`}>{children}</div>
    </div>
  );
};
