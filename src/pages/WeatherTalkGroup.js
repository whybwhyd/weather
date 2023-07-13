import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as G from '../style/WeatherTalkGroupStyled';
import api from '../axios/api';
import profileDefault from '../images/WeatherTalk/profileDefault.png';
import { useNavigate } from 'react-router-dom';

export const WeatherTalkGroup = () => {
  const navigate = useNavigate();
  const [weathers, setWeathers] = useState([]);

  // 조회함수
  const fetchWeathers = async () => {
    const { data } = await api.get('/weathers');
    console.log('data', data);
    setWeathers(data);
  };

  useEffect(() => {
    // db로부터 값을 가져옴.
    fetchWeathers();
  }, []);

  const onDeleteButtonClickHandler = async (id) => {
    await api.delete(`/weathers/${id}`);
    setWeathers((prevWeathers) =>
      prevWeathers.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate('/main');
        }}
      >
        이전페이지
      </button>
      <G.Grid>
        <G.GlobalStyles />
        {weathers.map((item) => (
          <div key={item.id}>
            <G.Content>
              <G.Button onClick={() => onDeleteButtonClickHandler(item.id)}>
                X
              </G.Button>

              <Link
                to={`/weatherTalkGroup/${item.id}`}
                state={{ item }}
                style={{ textDecoration: 'none' }}
              >
                <G.ProfileGroup>
                  <G.ProfileImg src={profileDefault} alt="얼굴 기본 사진" />
                  <G.NickName>{item.createdBy}</G.NickName>
                </G.ProfileGroup>

                <G.Text>
                  {/* 아래는 타이틀 나중에 스타일 */}
                  <G.Title>{item.title}</G.Title>
                  <br />
                  <G.Contents>{item.content}</G.Contents>
                </G.Text>
              </Link>
            </G.Content>
          </div>
        ))}
        {/* 글 작성 칸으로 이동 */}
        <button
          onClick={() => {
            navigate('/TalkMake');
          }}
        >
          글 작성하기
        </button>
      </G.Grid>
    </div>
  );
};

export default WeatherTalkGroup;
