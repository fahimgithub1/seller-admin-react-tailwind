


export default function TrWrepper(props){

    return(
        <tr className="my-3 border-y-[1px] border-gray-400 text-lg text-left capitalize items-center" >
            {props.children}
        </tr>
    )
}