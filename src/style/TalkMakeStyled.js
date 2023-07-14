import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
body{
background-color: #F0F6FE;
}`;
export const SubpageHeaderImg = styled.img`
width: 210vh;
`;

export const Grid = styled.div`
display:grid;
justify-content: center;
justify-items: center;
`;
export const WriteBox = styled.div`
display:grid;
background-color:white;
border-radius:20px;
border:2px solid #5595F1;
width:800px;
height:650px;
transform: translate(0px, 0px);
`;
export const InputTitle = styled.input`
transform: translate(80px, 50px);
width:600px;
height:40px;
border:3px solid #5595F1;
&::placeholder {
    font-weight: bold;
    font-size:25px;
  }
`;
export const InputCreatedBy = styled.input`
transform: translate(80px, 0px);
width:600px;
height:30px;
border:3px solid #5595F1;
&::placeholder {
    font-weight: bold;
    font-size:20px;
  }
`;
export const Textarea = styled.textarea`
transform: translate(80px, -50px);
width:600px;
height:400px;
border:3px solid #5595F1;
&::placeholder {
    font-weight: bold;
    font-size:20px;
  }
`;
export const Button = styled.button`
background-color:#A4BCDF;
color:white;
border-radius:10px;
width:150px;
border:none;
margin-left:20px;
font-size:20px;
transform: translate(-17px, 0px);
`;
export const BfButton = styled.button`
  transform: translate(30px, -90px);
  background-color: transparent;
  font-size: 30px;
  color: white;
  border: none;
`;