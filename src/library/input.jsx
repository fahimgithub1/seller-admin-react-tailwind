

export default function Input(props){

    return(
        <input type={props.type} placeholder={props.placeholder} 
               className="w-full mb-3 mt-2 p-2 rounded-lg focus:outline-none border-[1px] border-gray-400" 
        />
    )
}