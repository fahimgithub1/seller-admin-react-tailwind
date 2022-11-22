

export default function Paragrap(props){

    return(
        <p className={`mt-1 mb-4 text-md text-gray-600 font-semibold ${props.styles}`}>
            {props.text}
        </p>
    )
}