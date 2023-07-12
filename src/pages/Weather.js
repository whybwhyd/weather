import React from 'react';
import * as W from '../style/WeatherStyled';
import Cloudy from '../images/Cloudy.png';
import Cloud from '../images/Cloud.png';
import Sun from '../images/Sun.png';

export const Weather = ({ TMP, POP, REH, SKY, WSD }) => {
  return (
    <div>
      <div>
        <W.WeatherImg>
          {POP < 50 && SKY <= 5 && <img src={Sun} alt="맑음" />}
          {SKY >= 6 && SKY < 8 && <img src={Cloud} alt="구름 많음" />}
          {(POP > 50 || SKY >= 9) && <img src={Cloudy} alt="흐림" />}
        </W.WeatherImg>
        <W.Temperture>{TMP}℃</W.Temperture>
      </div>
      <W.Rain>강수확률:{POP}%</W.Rain>
      <W.Wind>풍속: {WSD} m/s</W.Wind>
      <W.Humid>습도: {REH}%</W.Humid>
    </div>
  );
};
