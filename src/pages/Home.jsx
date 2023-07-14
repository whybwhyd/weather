import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as H from '../style/HomeStyled';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <H.GlobalStyles />
      <div>
        <form>
          <H.SButton
            onClick={() => {
              navigate('/signUp');
            }}
          >
            SIGNUP
          </H.SButton>
          <H.MButton
            onClick={() => {
              navigate('/main');
            }}
          >
            LOGIN
          </H.MButton>
        </form>
      </div>
    </div>
  );
}

export default Home;
