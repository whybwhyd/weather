import styled, {createGlobalStyle} from 'styled-components';
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
export const Button = styled.button`
  transform: translate(89rem, 1rem);
  /* 버튼 위치 확인 후 민배경에 버튼 반응형으로 바꾸기 */
  background-color: transparent;
  color:transparent;
  border-color:transparent;
  border-bottom:3px solid white;
  width: 130px;
  height: 50px;
  margin-right: 30px;
`;
