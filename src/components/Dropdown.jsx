
function Dropdown({onDeleteButtonClickHandler,id,setWeathers}) {


    return (
      <>
        <li><button onClick={() => onDeleteButtonClickHandler(id)}>삭제</button></li>
        <li><button>수정</button></li>
      </>
    );
  }
  
  export default Dropdown;