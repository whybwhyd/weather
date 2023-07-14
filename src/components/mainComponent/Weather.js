import React from 'react';
import * as W from '../../style/WeatherStyled';
import Cloudy from '../../images/Cloud.png';
import Cloud from '../../images/Cloud.png';
import Sun from '../../images/Sun.png';
import Rain from '../../images/Rain.png';

export const Weather = ({
  TMP,
  POP,
  REH,
  SKY,
  WSD,
  PCP,
  dateMerge,
  timeMerge,
}) => {
  return (
    <div>
      <div>
        <W.WeatherImg>
          {REH < 50 && POP < 50 && SKY <= 5 && <img src={Sun} alt="맑음" />}
          {SKY >= 6 && SKY < 8 && <img src={Cloud} alt="구름 많음" />}
          {POP >= 30 || (SKY >= 9 && <img src={Cloudy} alt="흐림" />)}
          {PCP === '강수없음' && REH > 80 && <img src={Cloudy} alt="흐림" />}
          {PCP !== '강수없음' && PCP >= '1.0mm' && <img src={Rain} alt="비" />}
        </W.WeatherImg>
        <W.Temperture>{TMP}℃</W.Temperture>
      </div>
      <W.Date>
        {dateMerge} {timeMerge}
      </W.Date>

      {PCP !== '강수없음' && <W.Rain>강수량:{PCP}</W.Rain>}
      <W.RainP>강수확률:{POP}%</W.RainP>
      <W.Wind>풍속: {WSD} m/s</W.Wind>
      <W.Humid>습도: {REH}%</W.Humid>
    </div>
  );
};
export default Weather;
