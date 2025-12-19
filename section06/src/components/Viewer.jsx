import {useState} from 'react';
const Viewer = ({count}) => {
  
    return (
    <>
    <div>현재 카운트 : </div>
    <h1>{count}</h1> // props로 전달된 count 값을 화면에 표시 구조분해할당에 의한 원리
    </>  
  );
};

export default Viewer;