// import { AiOutlinePlus } from 'react-icons/ai';
import Button from './button';

export default function TitleWithButton(props){


    return(
        <div className="flex flex-wrap justify-between mb-6">
            <h1 className="text-2xl font-semibold">{props.title}</h1>

            <div className={`flex ${props.btnStyle}`}>
                <Button btnicon={props.btnicon} text={props.btntext} />
            </div>
        </div>
    )
}