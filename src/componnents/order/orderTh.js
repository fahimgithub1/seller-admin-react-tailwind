import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function OrdersTh(){

    return(
        <TrWrepper>
            <th className="h-5 w-5 text-center">
                <InputChecK />
            </th>
            <th>number</th>
            <th>date</th>
            <th>customer</th>
            <th>paid</th>
            <th>status</th>
            <th>items</th>
            <th>total</th>
            <th className="w-4 text-end"></th>
        </TrWrepper>
    )
}