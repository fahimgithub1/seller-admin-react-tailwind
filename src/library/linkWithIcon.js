import { Link } from "react-router-dom";

export default function LinkWithIcon(props){

    return(
        <li className='p-2 left-li mt-1'>
            <Link to={props.path} className='flex items-center'>
                <span className='nav-site-link none'>
                    <props.icon className=''/>
                </span>
                 {props.text}
            </Link>
        </li>
    )
}