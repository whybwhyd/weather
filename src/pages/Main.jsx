import React from 'react';
import * as M from '../style/MainStyled';
import MainPhoto from '../images/MainPhoto.png';

function Main() {
  return (
    <M.Grid>
      <M.Header>
        <M.img src={MainPhoto} alt="header 사진" />
      </M.Header>
      <M.Layer>
        <M.Nav>
          <div>
            오늘 날씨
            <br />
            옷차림 추천
            <br />
            날씨 현황 talk
            <br />
            오늘의 ootd
            <br />
            문의합니다
            <br />
          </div>
        </M.Nav>
        <section>
          <M.Box>오늘 날씨</M.Box>
          <M.Box>옷차림 추천</M.Box>
          <M.Box>날씨 현황 talk</M.Box>
          <M.Box>오늘의 ootd</M.Box>
        </section>
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
