import InputChecK from "../../library/inputChecK";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TrWrepper from "../../library/trWrepper";
import RdWithImg from "../../library/rdWithImg";


export default function ProductTd(props){

    return(
        <TrWrepper>
            <td>
                <InputChecK />
            </td>
            <td className="text-left flex py-2">
                <RdWithImg 
                            image={props.image}
                            name={props.productName}
                />
            </td>
            <td>{props.category}</td>
            <td>{props.status}</td>
            <td>{props.price}</td>
            <td className="w-4"><BiDotsVerticalRounded /></td>
        </TrWrepper>
    )
}