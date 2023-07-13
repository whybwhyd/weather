import React, { useEffect, useState } from 'react';
import api from '../axios/api';
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
      <div>
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
            readOnly={true}
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
          <button onClick={updateItem}>수정</button>
          <button onClick={backToDetail}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default WeatherUpdate;
