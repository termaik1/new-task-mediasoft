import React, { FC } from "react";

import Header from "app/components/header";
import Footer from "app/components/footer";

import styles from "./styles";

const DefaultLayout: FC = ({ children }) => {
  const classes = styles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
