import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";

export default function ReturnTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left">{props.name}</td>
            <td>{props.amount}</td>
            <td>{props.status}</td>
            <td className="max-w-[100px]">{props.reason}</td>
            <td className="max-w-[100px]">{props.comment}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}