import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";

export default function CatagorisTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left">{props.productName}</td>
            <td>{props.productItem}</td>
            <td>hide</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}