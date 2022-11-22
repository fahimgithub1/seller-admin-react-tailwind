import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";
import RdWithImg from "../../library/rdWithImg";

export default function CustomersTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left flex">
            <RdWithImg 
                            image={props.image}
                            name={props.name}
            />
                {/* {props.productName} */}
            </td>
            <td>{props.reg}</td>
            <td>{props.country}</td>
            <td>{props.group}</td>
            <td>{props.spent}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}