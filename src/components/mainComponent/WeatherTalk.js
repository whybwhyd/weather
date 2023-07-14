import React from 'react';
import * as T from '../../style/WeatherTalkStyled';
import profileDefault from '../../images/WeatherTalk/profileDefault.png';

export const WeatherTalk = () => {
  return (
    <div>
      <T.Content>
        <div>
          <T.ProfileImg src={profileDefault} alt="얼굴 기본 사진"/> 
          <T.NickName>익명</T.NickName>
        </div>
        <T.Text>
          <p>이젠 진짜 여름인가봐요 많이 덥네요 ㅠ 실내에서 에어컨 트는 곳이 많아</p>
          <br/>  
          <p>감기 많이 걸리는데 다들 가디건 챙기세요</p>
        </T.Text>
      </T.Content>
    </div>
  );
};

export default WeatherTalk;
