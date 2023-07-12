import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const WeatherInfo = () => {
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
        const BaseDate = `${todayYear}0${todayMonth}${todayDate}`;

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const weatherHour = hours >= 10 ? hours.toString() : `0${hours}`;
        const weatherMinutes =
          minutes >= 10 ? minutes.toString() : `0${minutes}`;
        const weatherTime = `${weatherHour}${weatherMinutes}`;

        const BaseTime = (weatherTime) => {
          if (weatherTime > '0210' && weatherTime <= '0510') {
            return '0200';
          }
          if (weatherTime > '0510' && weatherTime <= '0810') {
            return '0500';
          }
          if (weatherTime > '0810' && weatherTime <= '1110') {
            return '0800';
          }
          if (weatherTime > '1110' && weatherTime <= '1410') {
            return '1100';
          }
          if (weatherTime > '1410' && weatherTime <= '1710') {
            return '1400';
          }
          if (weatherTime > '1710' && weatherTime <= '2010') {
            return '1700';
          }
          if (weatherTime > '2010' && weatherTime <= '2310') {
            return '2000';
          }
          if (
            (weatherTime > '2310' && weatherTime <= '2359') ||
            (weatherTime >= '0000' && weatherTime <= '0210')
          ) {
            return '2300';
          }

          return null;
        };

        const baseTime = BaseTime(weatherTime);
        if (!baseTime) {
          throw new Error('Invalid weatherTime');
        }

        const apiUrl = `${url}?serviceKey=${SERVICE_KEY}&numOfRows=11&pageNo=1&dataType=JSON&ftype=ODAM&base_date=${BaseDate}&base_time=${baseTime}&nx=60&ny=127`;

        const response = await axios.get(apiUrl);

        const responseData = response.data.response.body.items.item;
        console.log(response.data.response.body.items.item);

        setIsLoading(false);
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="weatherInfo">
          <Weather
            const TMP={data[0].fcstValue} //1시간 기온
            POP={data[7].fcstValue} //강수 확률 %
            PCP={data[9].fcstValue} //한시간 강수량
            REH={data[10].fcstValue} //습도%
            SKY={data[5].fcstValue} //하늘상태
            WSD={data[4].fcstValue} //풍속
          />
        </div>
      )}
    </section>
  );
};

export default WeatherInfo;

