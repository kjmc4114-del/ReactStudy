const Controller = ({onClickButton}) => {
    
    return (
    <>
    <button onClick={
        () => {
            onClickButton(-1); // App 컴포넌트에서 전달된 onClickButton 함수 호출
        }
    }> -1 </button>
    <button onClick={()=>{
         onClickButton(-10); // App 컴포넌트에서 전달된 onClickButton 함수 호출
    }}
    >-10</button>
     <button onClick={()=>{
         onClickButton(-100); // App 컴포넌트에서 전달된 onClickButton 함수 호출
    }}
    >-100</button>
    <button>+1</button>
    <button>+10</button>
    <button>+100</button>
    </>
    );
}

export default Controller;