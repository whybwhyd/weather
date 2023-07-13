import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../axios/api';
import Detail from '../components/Detail';

const WeatherDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});

  const getDetail = async () => {
    try {
      const { data } = await api.get('/weathers'); // 수정: /weathers에서 전체 목록을 가져옴
      const weather = data.find((item) => item.id === parseInt(id)); // 수정: id로 필터링하여 해당 게시물을 찾음

      if (weather) {
        setItem(weather);
        setLoading(false);
      } else {
        console.log(`Weather with id ${id} not found.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Detail
          id={item.id}
          title={item.title}
          contents={item.content}
          createdBy={item.createdBy}
        />
      )}
    </div>
  );
};

export default WeatherDetail;
