import './App.css'
import { useState } from 'react'

//리액트의 리랜더링 조건
//1. 상태가 변경될 때
//2. 부모 컴포넌트가 리랜더링 될 때
//3, Props가 변경될 때
//4. 강제 리랜더링 될 때

const Bulb = () => { // Bulb 컴포넌트 변수를 props로 받아옴
  const [light, setLight] = useState("OFF");
  return (
    <div>
    {
    light === "ON" ? (<h1 style = {{backgroundColor:"orange"}}> ON </h1>) : (<h1 style={{backgroundColor : light === "ON" ? "yellow" : "gray"}}>OFF</h1> )
    } 
    <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")} >ON & OFF</button>
    <hr />
    </div> 
  );
};

const Counter = () => {
  const [count, setCount] = useState(0); // useState 훅을 사용하여 상태를 관리할 수 있다 변수명 , set+변수명 형태로 많이 짓는다.
  return (
      <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가+</button>
      <button onClick={() => setCount(count - 1)}>감소-</button>    
      </div>
  );
}
// 컴포넌트별로 다 모듈화를 하는게 좋다.
function App() { // html을 반환하는 함수를 컴포넌트라고한다.  Root 컴포넌트  관례상 App으로 많이 짓는다.
  return (
    <>     
        <Bulb /> 
        <Counter />
    </>
  )
} // Root 컴포넌트 아래 자식컴포넌트로 구성됨
export default App
