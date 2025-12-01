import './App.css'
import Button from './compoents/Button';

function App() { // html을 반환하는 함수를 컴포넌트라고한다.  Root 컴포넌트  관례상 App으로 많이 짓는다.
  const buttonProps = {
    text: 'Click',
    color: 'blue'
  }
  return (
    <>     
      <Button {...buttonProps}/>
      <Button text = {"버튼2"}/>
      <Button>
        <span>안녕하세요</span>
      </Button>
    </>
  )
} // Root 컴포넌트 아래 자식컴포넌트로 구성됨

export default App
