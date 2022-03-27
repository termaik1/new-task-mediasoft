import React, { FC, useState } from "react";
import { Map as YandexMap, Placemark, YMaps } from "react-yandex-maps";

import { DEFAULT_MAP_LAT, DEFAULT_MAP_LNG } from "app/config/constants";

import styles from "./styles";

const defaultCoordinate = [DEFAULT_MAP_LAT, DEFAULT_MAP_LNG];

const defaultState = {
  center: defaultCoordinate,
  zoom: 10,
};

export type TMapProps = {
  onPlacemark: (values: [number, number]) => void;
};

const Map: FC<TMapProps> = ({ onPlacemark = () => {} }) => {
  const classes = styles();
  const [coordinate, setCoordinate] = useState(null);

  const onClick = (e) => {
    const coordinates = e.get("coords");
    setCoordinate(coordinates);
    onPlacemark(coordinates);
  };

  return (
    <div className={classes.root}>
      <YMaps className={classes.root} onLoad={() => console.log('on load')} onError={(e) => console.log('err', e)}>
        <YandexMap defaultState={defaultState} onClick={onClick}>
          {coordinate && <Placemark geometry={coordinate} />}
        </YandexMap>
      </YMaps>
    </div>
  );
};

export default Map;
