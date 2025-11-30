import './App.css'
import Header from './compoents/Header'; // vite는 확장자를 생략가능하다.
import Main from './compoents/Main';
import Footer from './compoents/Footer';

function App() { // html을 반환하는 함수를 컴포넌트라고한다.  Root 컴포넌트  관례상 App으로 많이 짓는다.
  return (
    <>      
      <Header /> 
      <Main />
      <h1>App</h1>
      <Footer />
    </>
  )
} // Root 컴포넌트 아래 자식컴포넌트로 구성됨

export default App
