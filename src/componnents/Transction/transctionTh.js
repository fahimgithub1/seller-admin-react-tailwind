import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function TransctionTh(){

    return(
        <TrWrepper>
            <th className="h-5 w-5 text-center">
                <InputChecK />
            </th>
            <th>Date</th>
            <th>Trans No</th>
            <th>amount</th>
            <th>vat</th>
            <th>Comment</th>
            <th>Statement</th>
            <th className="w-4 text-end"></th>
        </TrWrepper>
    )
}