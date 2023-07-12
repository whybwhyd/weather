import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import WeatherTalk from '../pages/WeatherTalk';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/weatherTalk" element={< WeatherTalk/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
