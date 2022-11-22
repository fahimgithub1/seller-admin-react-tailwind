import { BsFillBagPlusFill } from 'react-icons/bs';
import Paragrap from '../../library/paragrap';

export default function HelpItem(props){

    return(
        <div className='md:w6/12 lg:w-4/12  justify-center p-2'>
            <div className='border-[1px] border-gray-500 p-3 text-gray-800 text-center rounded-lg bg-slate-200  hover:bg-blue-300'>
                <BsFillBagPlusFill className='m-auto mb-3 text-4xl' />
                <Paragrap 
                            text={props.text}
                            styles='mb-0'
                />
            </div>
        </div>
    )
}