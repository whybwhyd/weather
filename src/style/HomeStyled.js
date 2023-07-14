import styled, { createGlobalStyle } from 'styled-components';
import Home from '../images/Home.png';

export const GlobalStyles = createGlobalStyle`
body{
background-image: url(${Home});
background-size:cover;
background-repeat: no-repeat;
background-color: #A4BCDF;
height: 100vh; /* 화면 전체 높이로 설정 */
overflow: hidden; /* 화면 크기를 넘어가는 콘텐츠의 스크롤바를 숨김 */
}
`;
export const SButton = styled.button`
  position: fixed;
  right: 120px;
  background-color: transparent;
  color: transparent;
  border-color: transparent;
  border-bottom: 3px solid white;
  width: 80px;
  height: 50px;
  margin-right: 30px;
`;
export const MButton = styled.button`
  position: fixed;
  right: 15px;
  background-color: transparent;
  color: transparent;
  border-color: transparent;
  border-bottom: 3px solid white;
  width: 70px;
  height: 50px;
  margin-right: 30px;
`;
