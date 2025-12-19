import './App.css'
import Viewer from './components/Viewer.jsx'
import Controller from './components/Controller.jsx'  
import { useState , useEffect , useRef} from 'react'
function App() {
  const [count, setCount] = useState(0);
  const [input ,setInput] = useState(''); // input 상태 관리]
  
  useEffect(() => { // 마운트되어 있을 때마다 실행
    console.log(`${count}`); // side effect
  }, [count , input]); // =[] 빈배열: 마운트 될 때만 실행 배열의 값이 바뀌게 되면 side effect 실행 [count]: count 값이 바뀔 때마다 실행  [특정 값]: 특정 값이 바뀔 때마다 실행 [특정 값1, 특정 값2]: 특정 값1, 특정 값2가 바뀔 때마다 실행 , [] dependency array (의존성배열) deps 
  

  useEffect(() => {}); // 마운트 될 때, 업데이트 될 때마다 실행

  
  
  const onClickButton = (value) => {
    setCount(count + value);
  }
  return (
    <div className="App">
      <div>
        카운터어플리케이션
      </div>
      <section>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count}/>  {/**전달된 count 값을 Viewer 컴포넌트에 props로 전달 */}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
} 
export default App
