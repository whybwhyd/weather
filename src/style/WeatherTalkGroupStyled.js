import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
background-color: #A4BCDF;
}`;
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

export const Button = styled.button`
  transform: translate(600px, 0px);
  background-color: transparent;
  border: none;
  color: #5595f1;
  font-weight: 900px;
  font-size: 15px;
`;
export const ProfileGroup = styled.div`
  height: 20px;
`;
export const ProfileImg = styled.img`
  transform: translate(50px, 20px);
`;
export const NickName = styled.div`
  transform: translate(110px, -10px);
  font-size: 20px;
  color: black;
`;

export const Text = styled.div`
  transform: translate(50px, 60px);
  color: black;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.p`
  font-size: 15px;
`;
