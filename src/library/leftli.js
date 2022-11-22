import { AiFillCaretDown } from 'react-icons/ai';

export default function LeftLi(props){

    return(
        <div className='p-2 mt-1 flex items-center justify-between cursor-pointer' onClick={props.onProductnavHandle}>
            <div className="flex items-center">
                <span className='nav-site-link'>
                    <props.icon/>
                </span>
                {props.text}
            </div>

            <AiFillCaretDown />
        </div>
    )
}