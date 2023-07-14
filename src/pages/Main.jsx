import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as M from '../style/MainStyled';
import MainPhoto from '../images/MainPhoto.png';
import Ootd from '../images/Ootd.png';
import Weather from '../components/mainComponent/Weather';
import Clothes from '../components/mainComponent/Clothes';
import axios from 'axios';
import WeatherTalk from '../components/mainComponent/WeatherTalk';

function Main() {
  const areas = [
    { name: '서울', nx: 60, ny: 127 },
    { name: '인천', nx: 55, ny: 124 },
    { name: '수원(경기도)', nx: 60, ny: 121 },
    { name: '춘천(강원도)', nx: 73, ny: 134 },
    { name: '강릉(강원도)', nx: 92, ny: 131 },
    { name: '청주(충청북도)', nx: 69, ny: 106 },
    { name: '대전(충청남도)', nx: 67, ny: 100 },
    { name: '전주(전라북도)', nx: 63, ny: 89 },
    { name: '광주(전라남도)', nx: 58, ny: 74 },
    { name: '목포(전라남도)', nx: 51, ny: 67 },
    { name: '여수(전라남도)', nx: 73, ny: 66 },
    { name: '부산', nx: 98, ny: 76 },
    { name: '창원(경상남도)', nx: 91, ny: 77 },
    { name: '울릉도/독도(경상북도)', nx: 127, ny: 127 },
    { name: '안동(경상북도)', nx: 91, ny: 106 },
    { name: '제주도', nx: 52, ny: 38 },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [selectedArea, setSelectedArea] = useState(areas[0]);
  const now = new Date();
  const todayYear = now.getFullYear();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();
  const dateMerge = `${todayYear}년 ${todayMonth}월 ${todayDate}일`;
  const hours = now.getHours();
  const BaseDate =
    hours >= 0 && hours <= 2
      ? `${todayYear}0${todayMonth}${todayDate - 1}`
      : `${todayYear}0${todayMonth}${todayDate}`;
  const minutes = now.getMinutes();
  const timeMerge = `${hours}:${minutes}`;
  const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
  const BaseTime = (() => {
    const weatherTime = `${now.getHours().toString().padStart(2, '0')}${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
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

  useEffect(() => {
    const getWeather = async () => {
      try {
        const { nx, ny } = selectedArea;
        const newApiUrl = `${url}?serviceKey=${SERVICE_KEY}&numOfRows=11&pageNo=1&dataType=JSON&ftype=SHRT&base_date=${BaseDate}&base_time=${BaseTime}&nx=${nx}&ny=${ny}`;
        console.log(newApiUrl);
        const response = await axios.get(newApiUrl);
        const responseData = response.data.response.body.items.item;
        setIsLoading(false);
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [selectedArea]);
  const handleAreaChange = (e) => {
    const selectedValue = e.target.value;
    const selected = areas.find((area) => area.name === selectedValue);
    setSelectedArea(selected);
  };
  return (
    <M.Grid>
      <M.Header>
        <Link to="/">
          <M.HeaderImg src={MainPhoto} alt="header 사진" />
        </Link>
      </M.Header>
      <M.Layer>
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
        <M.Section>
          <div>
            <M.BoxTitle>
              <M.BoxTitleCircle>● </M.BoxTitleCircle>오늘 날씨
              <M.BoxTitleCircle> ●</M.BoxTitleCircle>
            </M.BoxTitle>
            <M.Box1>
              <div>
                <M.Area>
                  <select
                    id="area"
                    value={selectedArea.name}
                    onChange={handleAreaChange}
                  >
                    {areas.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <ul>
                      {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                      ))}
                    </ul>
                  )}
                </M.Area>
              </div>
              {isLoading ? (
                <div className="loader">
                  <span className="loader_text">Loading...</span>
                </div>
              ) : (
                <div>
                  <Weather
                    TMP={data[0].fcstValue} //1시간 기온
                    POP={data[7].fcstValue} //강수 확률 %
                    REH={data[10].fcstValue} //습도%
                    SKY={data[5].fcstValue} //하늘상태
                    WSD={data[4].fcstValue} //풍속
                    PCP={data[9].fcstValue} //강수
                    dateMerge={dateMerge}
                    timeMerge={timeMerge}
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
                <div>
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
                      >
                        <M.Plus>더보기</M.Plus>
                      </Link>
                    </div>
                  </M.GridB>
                  <div>
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
            <M.Box4>
              <M.OotdImg src={Ootd} alt="ootd 사진" />
            </M.Box4>
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
