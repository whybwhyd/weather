import React, { useState } from 'react';
import api from '../axios/api';
import { useNavigate } from 'react-router-dom';

const Board = ({ id, title, contents, createdBy }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const [weathers, setWeathers] = useState([]);

  const navigate = useNavigate();

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
        <h2>{title}</h2>
        <h5>{createdBy}</h5>
        <p>{contents}</p>
      </div>
      <div>
        <button onClick={onDeleteButtonClickHandler}>삭제</button>
        <button onClick={moveToTalk}>목록으로</button>
        <button onClick={moveToUpdate}>수정</button>
      </div>
    </div>
  );
};

export default Board;
