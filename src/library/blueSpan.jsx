

export default function BlueSpan(props){

    return(
        <span className={`text-blue-700 text-md m-2 ${props.classes}`}>
            <a href="/">{props.text}</a>
        </span>
    )
}