import { useState , useRef} from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const inputRef = useRef(null); // 만약에 useRef() 를 사용하지 않고 일반변수를 사용하면 리렌더링 될때마다 값이 초기화됨
  const onSubmit = () => {
    if(input.name ===""){
      console.log(inputRef.current); // ref여 연결된 Dom요소가 담김
      inputRef.current.focus(); // focus() 메서드로 포커스 이동
      return;
    }
  }
  
  const contRef = useRef(0);
  const onChange = (e) => {
    contRef.current ++; // 수정했을때마다 횟수가 저장
    setInput({
      ...input,
      [e.target.name]: e.target.value, // e.target.name은 name, birth, country, bio 중 하나 [] << 안에 프로퍼티의 키를 설정하는것임. 이벤트 발생한 태그의 name 속성값이 들어감
    });
  }  

  return (
    <div>
      <div>
        <input
          ref = {inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
