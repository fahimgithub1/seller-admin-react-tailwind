import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";

export default function OrderTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left">{props.number}</td>
            <td>{props.date}</td>
            <td>{props.name}</td>
            <td>{props.paid}</td>
            <td>{props.status}</td>
            <td>{props.items}</td>
            <td>{props.total}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}