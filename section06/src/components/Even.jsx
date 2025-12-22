import { useEffect } from 'react';  

const Even = () => {
    useEffect(() => {
        return () => {
            console.log('Even 컴포넌트가 언마운트 되었습니다.');
        }; // cleanup function
    },[]);
    return (
        <div>
            짝수입니다.
        </div>
    )
}

export default Even;