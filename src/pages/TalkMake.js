import React, { useState } from 'react';
import SubpageHeader from '../images/SubpageHeader.png';
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
      <header>
      <T.SubpageHeaderImg src={SubpageHeader} alt="header 사진" />
    </header>
    <T.BfButton
        onClick={() => {
          navigate('/weatherTalkGroup');
        }}
      >
        &lt; 이전페이지
      </T.BfButton>
      <T.Grid>
        <T.WriteBox>
        <div>
        <T.InputTitle type="text" name="title" placeholder="제목" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <T.InputCreatedBy
          type="text"
          placeholder="작성자"
          name="createdBy"
          value={createdBy}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <T.Textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={onChange}
        ></T.Textarea>
      </div>
        </T.WriteBox>
        <br /><br />
        <div>
        <T.Button onClick={saveItem}>저장</T.Button>
        <T.Button onClick={moveToTalk}>취소</T.Button>
      </div>
      </T.Grid>
    </div>
  );
}

export default TalkMake;