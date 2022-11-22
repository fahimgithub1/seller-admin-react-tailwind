import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";

export default function SellerTd(props){

    
    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left">{props.sellerId}</td>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.area}</td>
            <td>{props.scope}</td>
            <td>{props.status}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}