

export default function Button(props){

    return(
        <button className="btn">
            <props.btnicon className='mr-1 text-lg font-extrabold' />
            {props.text}
        </button>
    )
}