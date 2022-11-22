

export default function Lable(props){

    return(
        <label htmlFor={props.forLab} className="mb-2 text-md font-semibold" > {props.label} </label>
    )
}