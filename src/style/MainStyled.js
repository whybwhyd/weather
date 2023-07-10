import styled, {createGlobalStyle} from 'styled-components';

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
export const img = styled.img`
  width: 1000px;
`;
export const Layer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;
export const Nav = styled.nav`
  border: 1px solid black;
  border-radius: 20px;
  width: 230px;
  margin: 20px 50px auto 0px;
  text-align: center;
`;
export const Box = styled.section`
  border: 1px solid black;
  border-radius: 20px;
  width: 650px;
  margin: 20px 10px auto 0px;
`;
export const Footer = styled.footer`
  background-color: #a4bcdf;
  width: 980px;
  padding: 10px;
  margin-top: 60px;
`;
