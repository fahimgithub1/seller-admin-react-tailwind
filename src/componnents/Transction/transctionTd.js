import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";

export default function TransctionTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left">{props.date}</td>
            <td>{props.tranNo}</td>
            <td>{props.amount}</td>
            <td>{props.vat}</td>
            <td className="max-w-[100px] mr-2">{props.comment}</td>
            <td>{props.statement}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}