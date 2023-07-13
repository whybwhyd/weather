import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as M from '../style/MainStyled';
import MainPhoto from '../images/MainPhoto.png';
import { Weather } from './Weather';
import { Clothes } from './Clothes';
import axios from 'axios';
import { WeatherTalk } from './WeatherTalk';

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      try {
        const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;
        const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
        const now = new Date();
        const todayYear = now.getFullYear();
        const todayMonth = now.getMonth() + 1;
        const todayDate = now.getDate();
        const hours = now.getHours();
        const BaseDate =
          hours >= 0 && hours <= 2
            ? `${todayYear}0${todayMonth}${todayDate - 1}`
            : `${todayYear}0${todayMonth}${todayDate}`;
        const minutes = now.getMinutes();
        const BaseTime = (() => {
          const weatherTime = `${now
            .getHours()
            .toString()
            .padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
          const timeRanges = [
            { start: '0210', end: '0510', base: '0200' },
            { start: '0510', end: '0810', base: '0500' },
            { start: '0810', end: '1110', base: '0800' },
            { start: '1110', end: '1410', base: '1100' },
            { start: '1410', end: '1710', base: '1400' },
            { start: '1710', end: '2010', base: '1700' },
            { start: '2010', end: '2310', base: '2000' },
            { start: '2310', end: '2359', base: '2300' },
            { start: '0000', end: '0210', base: '2300' },
          ];
          const range = timeRanges.find(
            (range) => weatherTime > range.start && weatherTime <= range.end
          );
          return range ? range.base : null;
        })();
        if (!BaseTime) {
          throw new Error('Invalid weatherTime');
        }
        const apiUrl = `${url}?serviceKey=${SERVICE_KEY}&numOfRows=11&pageNo=1&dataType=JSON&ftype=SHRT&base_date=${BaseDate}&base_time=${BaseTime}&nx=60&ny=127`;
        console.log(apiUrl);
        const response = await axios.get(apiUrl);
        const responseData = response.data.response.body.items.item;
        setIsLoading(false);
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, []);
  return (
    <M.Grid>
      <M.Header>
        <M.HeaderImg src={MainPhoto} alt="header 사진" />
      </M.Header>
      <M.Layer>
        {/* Nav 다 만들고 컴포넌트로 빼기 */}
        <M.Nav>
          <div>
            <M.NavTitle>오늘 날씨</M.NavTitle>
            <M.NavCircle>● ● ●</M.NavCircle>
            <M.NavTitle>옷차림 추천</M.NavTitle>
            <M.NavCircle>● ● ●</M.NavCircle>
            <M.NavTitle>날씨 현황 talk</M.NavTitle>
            <M.NavCircle>● ● ●</M.NavCircle>
            <M.NavTitle>오늘의 ootd</M.NavTitle>
            <M.NavCircle>● ● ●</M.NavCircle>
            <M.NavTitle>문의합니다</M.NavTitle>
          </div>
        </M.Nav>
        {/* Section 다 만들고 컴포넌트로 빼기 */}
        <M.Section>
          <div>
            <M.BoxTitle>
              <M.BoxTitleCircle>● </M.BoxTitleCircle>오늘 날씨
              <M.BoxTitleCircle> ●</M.BoxTitleCircle>
            </M.BoxTitle>
            <M.Box1>
              {isLoading ? (
                <div className="loader">
                  <span className="loader_text">Loading...</span>
                </div>
              ) : (
                <div className="weatherInfo">
                  <Weather
                    TMP={data[0].fcstValue} //1시간 기온
                    POP={data[7].fcstValue} //강수 확률 %
                    REH={data[10].fcstValue} //습도%
                    SKY={data[5].fcstValue} //하늘상태
                    WSD={data[4].fcstValue} //풍속
                  />
                </div>
              )}
            </M.Box1>
          </div>
          <div>
            <M.BoxTitle>
              <M.BoxTitleCircle>● </M.BoxTitleCircle>옷차림 추천
              <M.BoxTitleCircle> ●</M.BoxTitleCircle>
            </M.BoxTitle>
            <M.Box2>
              {isLoading ? (
                <div className="loader">
                  <span className="loader_text">Loading...</span>
                </div>
              ) : (
                <div className="weatherInfo">
                  <Clothes TMP={data[0].fcstValue} />
                </div>
              )}
            </M.Box2>
          </div>
          <div>
            <M.BoxTitle>
              <M.BoxTitleCircle>● </M.BoxTitleCircle>날씨 현황 talk
              <M.BoxTitleCircle> ●</M.BoxTitleCircle>
            </M.BoxTitle>
            <M.Box3>
              {isLoading ? (
                <div className="loader">
                  <span className="loader_text">Loading...</span>
                </div>
              ) : (
                <div>
                  <M.GridB>
                    <M.Region>서울 {data[0].fcstValue}℃</M.Region>
                    <div>
                      <Link
                        to="/WeatherTalkGroup"
                        style={{ textDecoration: 'none' }}
                        // state={{TMP:`${data[0].fcstValue}`}}
                      >
                        <M.Plus>더보기</M.Plus>
                      </Link>
                    </div>
                  </M.GridB>
                  <div className="weatherInfo">
                    <WeatherTalk TMP={data[0].fcstValue} />
                  </div>
                </div>
              )}
            </M.Box3>
          </div>
          <div>
            <M.BoxTitle>
              <M.BoxTitleCircle>● </M.BoxTitleCircle>오늘의 ootd
              <M.BoxTitleCircle> ●</M.BoxTitleCircle>
            </M.BoxTitle>
            <M.Box4>오늘의 ootd</M.Box4>
          </div>
        </M.Section>
      </M.Layer>
      <M.Footer>
        <div>
          Weather Fairy email:driarydiary12@naver.com <br />
          Copyright ⓒ 2023 weather windy All rights reserved.
        </div>
      </M.Footer>
    </M.Grid>
  );
}

export default Main;
