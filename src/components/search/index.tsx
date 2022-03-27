import React, { FC, useState } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";

import { Card } from "app/ui-kit/card";
import { Input } from "app/ui-kit/input";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  onSearch: (value: string) => void;
};

const Search: FC<TProps> = ({ onSearch }) => {
  const { isMobile } = useMobile();
  const classes = styles();
  const classesApp = stylesApp({ isMobile });

  const [value, setValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    onSearch(value);
    setValue(value);
  };

  return (
    <Card className={classes.root}>
      <Input
        className={classesApp.smallText}
        value={value}
        onChange={onChange}
        placeholder='Поиск по точному названию'
      />
    </Card>
  );
};

export default Search;
