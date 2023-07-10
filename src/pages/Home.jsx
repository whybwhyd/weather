import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as H from '../style/HomeStyled';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <H.GlobalStyles />
      <div>
        <form>
          <H.Button
            onClick={() => {
              navigate('/signUp');
            }}
          >
            SIGNUP
          </H.Button>
          <H.Button
            onClick={() => {
              navigate('/main');
            }}
          >
            LOGIN
          </H.Button>
        </form>
      </div>
    </div>
  );
}

export default Home;
