import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
body{
background-color: #A4BCDF;
}`;
export const Grid = styled.div`
display:grid;
justify-content: center;
align-self: center;
`;
export const WriteBox = styled.div`
background-color:white;
width:800px;
height:500px;
transform: translate(0px, 50px);
`;