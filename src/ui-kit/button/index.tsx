import React, { FC } from "react";

import cn from "classnames";

import { useMobile } from "app/hooks/use.mobile.hook";

import ButtonBase, { ButtonProps } from "@material-ui/core/Button";

import { EButtonTheme } from "app/models/enums";

import styles from "./styles";

interface IProps extends ButtonProps {
  children: React.ReactNode;
  theme?: keyof typeof EButtonTheme;
  className?: string;
}

export const Button: FC<IProps> = ({
  children,
  className = "",
  theme = "gray",
  disabled = false,
  ...rest
}) => {
  const { isMobile } = useMobile();
  const classes = styles({ isMobile });

  return (
    <ButtonBase
      className={cn(`${classes.root} ${className}`, {
        [classes.disabled]: disabled,
        [classes.gray]: !disabled && theme === "gray",
        [classes.blue]: !disabled && theme === "blue",
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
