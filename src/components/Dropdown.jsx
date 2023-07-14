import * as G from '../style/WeatherTalkGroupStyled';
function Dropdown({ onDeleteButtonClickHandler, moveToUpdate }) {
  return (
    <>
    <br/>
      <G.DropButton onClick={onDeleteButtonClickHandler}>삭제</G.DropButton>
      <br/>
      <G.DropButton onClick={moveToUpdate}>수정</G.DropButton>
    </>
  );
}

export default Dropdown;
