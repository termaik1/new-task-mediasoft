import React, { FC } from "react";
import cn from "classnames";

import { useMobile } from "app/hooks/use.mobile.hook";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  isPassed: boolean;
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Step: FC<TProps> = ({
  isPassed = false,
  isActive = false,
  children,
  className = "",
}) => {
  const { isMobile, isMobile375 } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles({ isMobile375 });

  return (
    <div
      className={cn(classes.root, className, {
        [classes.active]: isActive,
        [classes.passed]: isPassed,
      })}
    >
      <div className={classesApp.captionText}>{children}</div>
    </div>
  );
};
