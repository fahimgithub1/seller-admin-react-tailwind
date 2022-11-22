import { Link } from "react-router-dom";



export default function LeftLink(props){

    return(
        <li className='p-1 pl-11 left-li2'>
            <Link to={props.path} className='flex items-center'>
                 {props.text}
            </Link>
        </li>
    )
}