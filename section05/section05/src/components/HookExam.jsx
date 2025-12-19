import {use, useState} from "react";
import useInput from "../hooks/useInput.jsx";

//3가지 hook 관련팁
//1.함수컴포넌트 , 커스텀 훅 내부에서만 호출이 가능하다.
//2.훅은 조건부에서 허용되지 않는다. (반복문, if문, 중첩된 함수 등에서 사용금지)
//3.훅은 최상위에서만 호출되어야 한다. (return문, break문 등에서 사용금지)

const HookExam = () => { 
    const state = useState(0); // 훅은 조건 반복안에서는 호출이 절대 안됨<div className=""></div> // 최상위에서만 호출되어야 한다.
    // useInput 훅을 사용해보자
    const name = useInput();
    const password = useInput();     
    // 구조분해 할당으로 알아서됨. 
    return <dev></dev>
};

export default HookExam;