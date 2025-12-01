const Button = ({text , color ="black", children}) => {

    const onClickBuntton = (e) => {
        console.log(e)
        console.log(`${text} button clicked`)
    }
    return (
    <button 
        onClick = {onClickBuntton}
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
    </button>
    )
};

export default Button;