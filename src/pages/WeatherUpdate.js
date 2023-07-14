import React, { useEffect, useState } from 'react';
import api from '../axios/api';
import * as T from '../style/TalkMakeStyled';
import SubpageHeader from '../images/SubpageHeader.png';
import { useNavigate, useParams } from 'react-router-dom';
function WeatherUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
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
  const getDetail = async () => {
    try {
      const { data } = await api.get('/weathers'); // 수정: /weathers에서 전체 목록을 가져옴
      const weather = data.find((item) => item.id === parseInt(id)); // 수정: id로 필터링하여 해당 게시물을 찾음

      if (weather) {
        setItem(weather);
        setLoading(false);
      } else {
        console.log(`Weather with id ${id} not found.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  const updateItem = async () => {
    await api.patch(`/weathers/${id}`, item).then((res) => {
      alert('수정되었습니다.');
      navigate('/weatherTalkGroup/' + id);
    });
  };

  const backToDetail = () => {
    navigate('/weatherTalkGroup/' + id);
  };

  return (
    <div>
      <T.GlobalStyles />
      <header>
      <T.SubpageHeaderImg src={SubpageHeader} alt="header 사진" />
    </header>
    <T.BfButton
        onClick={() => {
          navigate('/weatherTalkGroup/' + id);
        }}
      >
        &lt; 이전페이지
      </T.BfButton>
      <T.Grid>
        <T.WriteBox>
      <div>
        <div>
          <T.InputTitle type="text" name="title" value={title} onChange={onChange} />
        </div>
        <br />
        <br /><br /><br />
        <div>
          <T.InputCreatedBy
            type="text"
            name="createdBy"
            value={createdBy}
            readOnly={true}
          />
        </div>
        <br /><br /><br /><br />
        <div>
          <T.Textarea
            name="content"
            cols="30"
            rows="10"
            value={content}
            onChange={onChange}
          ></T.Textarea>
        </div>
        <br />
      </div>
      </T.WriteBox>
      <br />
      <div>
          <T.Button onClick={updateItem}>수정</T.Button>
          <T.Button onClick={backToDetail}>취소</T.Button>
        </div>
      </T.Grid>
    </div>
  );
}

export default WeatherUpdate;
