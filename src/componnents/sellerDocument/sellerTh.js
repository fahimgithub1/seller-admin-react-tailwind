import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function SellerTh(){

    return(
        <TrWrepper>
            <th className="h-5 w-5 text-center">
                <InputChecK />
            </th>
            <th>Seller id</th>
            <th>Name</th>
            <th>type</th>
            <th>area</th>
            <th>scope</th>
            <th>status</th>
            <th className="w-4 text-end"></th>
        </TrWrepper>
    )
}