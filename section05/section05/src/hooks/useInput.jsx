import { useState } from "react";

function useInput() { // 이제 내부에 useState를 사용해도 된다.
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return {value, onChange};   
}

export default useInput;