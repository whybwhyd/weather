import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  background-color:white;
}
`;
export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-self: center;
`;
export const Header = styled.header`
  margin-bottom: 5px;
  /* 마지막에 header 꾸밀 거 없음 삭제 */
`;
export const HeaderImg = styled.img`
  width: 1000px;
`;
export const Layer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;
export const Nav = styled.nav`
  border: 3px solid #a4bcdf;
  border-radius: 20px;
  width: 210px;
  height: 320px;
  margin: 20px 50px auto 0px;
  text-align: center;
  font-weight: bolder;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const NavTitle = styled.div`
  padding: 9px;
  font-size: 18px;
  font-weight: 800px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const NavCircle = styled.div`
  margin: 10px;
  font-size: 1px;
  color: #a4bcdf;
`;
export const Section = styled.section`
  margin-top: 20px;
`;
export const BoxTitle = styled.p`
  font-weight: bolder;
  transform: translate(20px, -2px);
  margin-bottom: 10px;
`;
export const BoxTitleCircle = styled.span`
  color: #a4bcdf;
  font-size: 1px;
`;

export const Box = styled.section`
  border: 3px solid #a4bcdf;
  border-radius: 20px;
  width: 650px;
  margin: 0px 10px 20px 0px;
  display: grid;
  justify-content: center;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;
export const Footer = styled.footer`
  background-color: #a4bcdf;
  width: 980px;
  padding: 10px;
  margin-top: 60px;
`;
