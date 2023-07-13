import React, { useEffect, useState } from 'react';
import api from '../axios/api';
import * as T from '../style/TalkMakeStyled';
import { useNavigate } from 'react-router-dom';

function TalkMake() {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    id: 0,
    createdBy: '',
    title: '',
    content: '',
  });
  const { title, createdBy, content } = item;

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setItem({
      ...item,
      [name]: value,
    });
  };

  const saveItem = async () => {
    await api.post('/weathers', item).then((res) => {
      alert('등록되었습니다.');
      navigate('/weatherTalkGroup');
    });
  };
 
  const moveToTalk = () => {
    navigate('/weatherTalkGroup');
  };

  return (
    <div>
      <T.GlobalStyles />
      <T.Grid>
        <T.WriteBox>
        <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input
          type="text"
          name="createdBy"
          value={createdBy}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={saveItem}>저장</button>
        <button onClick={moveToTalk}>취소</button>
      </div>
        </T.WriteBox>
      </T.Grid>
    </div>
  );
}

export default TalkMake;