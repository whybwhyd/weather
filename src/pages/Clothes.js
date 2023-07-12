import React from 'react';
import { Link } from 'react-router-dom';
import * as C from '../style/ClothesStyled';
import Clothes28Img from '../images/Clothes28Img.jpg';
import Clothes2327Img from '../images/Clothes2327Img.jpg';
import Clothes2022Img from '../images/Clothes2022Img.jpg';
import Clothes1719Img from '../images/Clothes1719Img.jpg';
import Clothes1216Img from '../images/Clothes1216Img.jpg';
import Clothes911Img from '../images/Clothes911Img.jpg';
import Clothes58Img from '../images/Clothes58Img.jpg';
import Clothes4Img from '../images/Clothes4Img.jpg';

export const Clothes = ({ TMP }) => {
  return (
    <div>
      <C.Grid>
        <C.Temp>{TMP}℃</C.Temp>
        <C.Message>
          "{TMP >= 28 && '더운 여름, 시원하게 입으세요!'}
          {TMP >= 23 && TMP <= 27 && '더워도 여름 감기 조심!'}
          {TMP >= 20 && TMP <= 22 && '선선한 날씨, 가볍게 운동 어떠세요?'}
          {TMP >= 17 && TMP <= 19 && '나들이 가기 좋은 날씨네요'}
          {TMP >= 12 && TMP <= 16 && '멋내기 좋은 날이네요!'}
          {TMP >= 9 && TMP <= 11 && '조금 쌀쌀한데, 따뜻한 음료는 어떠세요?'}
          {TMP >= 5 && TMP <= 8 && '가죽자켓의 계절이 돌아왔네요!'}
          {TMP <= 4 && '롱패딩 없이는 못 살지만, 도전도 좋아요.'}"
        </C.Message>
        <Link to="/WeatherTalk" style={{ textDecoration: 'none' }}>
          <C.Plus>더보기</C.Plus>
        </Link>
        <div>
          {TMP >= 28 && <C.ClothesImg src={Clothes28Img} alt="28도 옷사진" />}

          {TMP >= 23 && TMP <= 27 && (
            <C.ClothesImg src={Clothes2327Img} alt="23~27도 옷사진" />
          )}

          {TMP >= 20 && TMP <= 22 && (
            <C.ClothesImg src={Clothes2022Img} alt="20~22도 옷사진" />
          )}

          {TMP >= 17 && TMP <= 19 && (
            <C.ClothesImg src={Clothes1719Img} alt="17~19도 옷사진" />
          )}

          {TMP >= 12 && TMP <= 16 && (
            <C.ClothesImg src={Clothes1216Img} alt="12~16도 옷사진" />
          )}

          {TMP >= 9 && TMP <= 11 && (
            <C.ClothesImg src={Clothes911Img} alt="9~11도 옷사진" />
          )}

          {TMP >= 5 && TMP <= 8 && (
            <C.ClothesImg src={Clothes58Img} alt="5~8도 옷사진" />
          )}

          {TMP <= 4 && <C.ClothesImg src={Clothes4Img} alt="4도 옷사진" />}
        </div>
        <C.ImgTitle>
          {TMP >= 28 && '민소매, 반팔, 반바지, 원피스'}
          {TMP >= 23 && TMP <= 27 && '반팔, 얇은 셔츠, 반바지, 면바지'}
          {TMP >= 20 && TMP <= 22 && '얇은 가디건, 긴팔, 면바지, 청바지'}
          {TMP >= 17 && TMP <= 19 && '얇은 니트, 맨투맨, 가디건, 청바지'}
          {TMP >= 12 &&
            TMP <= 16 &&
            '자켓, 가디건, 야상, 스타킹, 청바지, 면바지'}
          {TMP >= 9 &&
            TMP <= 11 &&
            '자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹'}
          {TMP >= 5 && TMP <= 8 && '코트, 가죽자켓, 히트텍, 니트, 레깅스'}
          {TMP <= 4 && '패딩, 두꺼운 코트, 목도리, 기모제품'}를 추천합니다.
        </C.ImgTitle>
      </C.Grid>
    </div>
  );
};
