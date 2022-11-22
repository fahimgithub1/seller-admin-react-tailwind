import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";

export default function OverviewTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left">{props.orderNo}</td>
            <td>{props.date}</td>
            <td>{props.fees}</td>
            <td>{props.commition}</td>
            <td>{props.vat}</td>
            <td>{props.WHT}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}