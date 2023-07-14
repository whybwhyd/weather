import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import WeatherTalk from '../components/mainComponent/WeatherTalk';
import WeatherTalkGroup from '../pages/WeatherTalkGroup';
import TalkMake from '../pages/TalkMake';
import WeatherDetail from '../pages/WeatherDetail';
import WeatherUpdate from '../pages/WeatherUpdate';



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/weatherTalk" element={<WeatherTalk />} />
        <Route path="/talkMake" element={<TalkMake />} />
        <Route path="/weatherTalkGroup" element={<WeatherTalkGroup />} />
        <Route path="/weatherTalkGroup/:id" element={<WeatherDetail/>} />
        <Route path="/weatherUpdate/:id" element={<WeatherUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
