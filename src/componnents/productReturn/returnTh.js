import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function OrdersTh(){

    return(
        <TrWrepper>
            <th className="h-5 w-5 text-center">
                <InputChecK />
            </th>
            <th>Product</th>
            <th>amount</th>
            <th>status</th>
            <th>reason</th>
            <th>Comment</th>
            <th className="w-4 text-end"></th>
        </TrWrepper>
    )
}