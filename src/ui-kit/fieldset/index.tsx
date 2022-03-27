import React, { FC } from 'react';

import styles from './styles';

type TProps = {
  children: React.ReactNode;
  legend: React.ReactNode;
  className?: string;
};

export const Fieldset: FC<TProps> = ({ children, legend, className = '' }) => {
  const classes = styles();

  return (
    <fieldset className={ `${classes.root} ${className}` }>
      <legend className={ classes.legend }>{ legend }</legend>
      <div className={ classes.content }>{ children }</div>
    </fieldset>
  );
};
