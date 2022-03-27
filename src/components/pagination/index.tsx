import React, { FC, useMemo } from "react";

import cn from "classnames";

import { useMobile } from "app/hooks/use.mobile.hook";
import { rangeList } from "app/utils/range.list.util";
import { DEFAULT_VISIBLE_ELEMENT } from "app/config/constants";

import Grid from "@material-ui/core/Grid";

import { Button } from "app/ui-kit/button";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  currentPage: number;
  totalCount: number;
  onNextPage: (page: number) => void;
  visibleElement?: number;
};

const Pagination: FC<TProps> = ({
  onNextPage,
  currentPage,
  totalCount,
  visibleElement = DEFAULT_VISIBLE_ELEMENT,
}) => {
  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles();
  const totalPage = Math.ceil(totalCount / visibleElement);

  const pages = useMemo(() => {
    const currentElement = currentPage * visibleElement;
    const nextElement = currentElement + visibleElement;

    if (currentPage === 1 && currentElement >= totalCount) {
      return [1];
    }

    if (currentPage === 2 && currentElement >= totalCount) {
      return [1, 2];
    }

    if (currentPage === 2 && nextElement >= totalCount) {
      return [1, 2, 3];
    }

    if (currentPage === 2 && nextElement <= totalCount) {
      return rangeList(currentPage - 1, currentPage + 2);
    }

    if (currentElement >= totalCount) {
      return rangeList(currentPage - 2, currentPage + 1);
    }

    if (nextElement >= totalCount) {
      const page = !!(currentPage - 1) ? currentPage - 1 : currentPage;

      return rangeList(page, currentPage + 2);
    }

    return rangeList(currentPage, currentPage + 3);
  }, [currentPage, totalCount, visibleElement]);

  const isNextPages = totalPage !== currentPage  && pages.length > 1;
  const isPrevPages = currentPage !== 1

  return (
    <>
      {isMobile ? (
        isNextPages && (
          <Button
            className={`${classes.showMore} ${classesApp.smallText}`}
            onClick={() => onNextPage(currentPage + 1)}
          >
            Показать ещё
          </Button>
        )
      ) : (
        <Grid
          className={classes.root}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          {isPrevPages && (
            <Button onClick={() => onNextPage(1)}> {"<<"} </Button>
          )}
          {pages.map((item) => (
            <div
              key={item}
              className={cn(classes.pageItem, classesApp.smallText, {
                [classes.pageActive]: item === currentPage,
              })}
              onClick={() => onNextPage(item)}
            >
              {item}
            </div>
          ))}
          {isNextPages && (
            <Button onClick={() => onNextPage(totalPage)}> {">>"} </Button>
          )}
        </Grid>
      )}
    </>
  );
};

export default Pagination;
