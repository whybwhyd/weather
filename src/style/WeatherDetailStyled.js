import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
background-color: #F0F6FE;
}`;
export const SubpageHeaderImg = styled.img`
width: 210vh;
`;
export const Grid = styled.div`
  display: grid;
  justify-content: center;
`;
export const Content = styled.div`
  transform: translate(0px, 10px);
  background-color: white;
  border: 3px solid #5595f1;
  border-radius: 20px;
  width: 650px;
  height: 220px;
  margin: 0px 10px 20px 0px;
  padding-top: 10px;
  padding-bottom: 30px;
`;
export const BfButton = styled.button`
  transform: translate(30px, -90px);
  background-color: transparent;
  font-size: 30px;
  color: white;
  border: none;
`;
