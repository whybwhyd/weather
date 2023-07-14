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
  width: 670px;
  height: 260px;
  margin: 0px 10px 20px 0px;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const XButton = styled.button`
  transform: translate(620px, 10px);
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
  transform: translate(50px, 40px);
`;
export const NickName = styled.div`
  transform: translate(110px, 10px);
  font-size: 20px;
  color: black;
`;

export const Text = styled.div`
  transform: translate(50px, 90px);
  color: black;
  width:475px;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.p`
  font-size: 15px;
`;

export const WriteButton = styled.button`
  position:fixed;
  bottom:50px;
  left:45%;
  background-color: #5595F1;
  border-radius:30px;
  width:200px;
  height:50px;
  border: none;
  color: white;
  font-weight: 900px;
  font-size: 20px;
`;
export const Button = styled.button`
transform: translate(30px, -90px);
background-color:transparent;
font-size:30px;
color:white;
border:none;
`;
export const DropButton = styled.button`
  transform: translate(0px, 0px);
  background-color: white;
  border: 2px solid black;
  color: black;
  font-size: 15px;
`;
export const DropButtonUl = styled.ul`
  transform: translate(600px, 0px);
  background-color: transparent;
  border: none;
  color: black;
  font-size: 25px;
  height:23px;
`;
