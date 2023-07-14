import React , {useState }from 'react';
import api from '../axios/api';
import profileDefault from '../images/WeatherTalk/profileDefault.png';
import Dropdown from './Dropdown';
import * as G from '../style/WeatherTalkGroupStyled';
import { useNavigate } from 'react-router-dom';

const Board = ({ id, title, contents, createdBy }) => {
  const navigate = useNavigate();
  const [view, setView] = useState("")
  const onDeleteButtonClickHandler = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      await api.delete(`/weathers/${id}`).then((res) => {
        alert('삭제되었습니다.');
        navigate('/weatherTalkGroup');
      });
    }
  };
  const moveToTalk = () => {
    navigate('/weatherTalkGroup');
  };
  const moveToUpdate = () => {
    navigate('/weatherUpdate/' + id);
  };

  return (
    <div>
      <div>
        <G.DropButtonUl
          onClick={() => {
            setView(!view);
          }}
        >
           {view ? '⌃' : ':'}
          {view && (
            <Dropdown
              onDeleteButtonClickHandler={onDeleteButtonClickHandler}
              moveToUpdate={moveToUpdate}
            />
          )}
        </G.DropButtonUl>
        <G.ProfileGroup>
          <G.ProfileImg src={profileDefault} alt="얼굴 기본 사진" />
          <G.NickName>{createdBy}</G.NickName>
        </G.ProfileGroup>
        <G.Text>
          <G.Title>{title}</G.Title>
          <br />
          <G.Contents>{contents}</G.Contents>
        </G.Text>
      </div>
      <div></div>
    </div>
  );
};

export default Board;
