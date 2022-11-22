import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function CustomersTh(){

    return(
        <TrWrepper>
            <th className="h-5 w-5 text-center">
                <InputChecK />
            </th>
            <th>name</th>
            <th>Registered</th>
            <th>Cuntry</th>
            <th>Group</th>
            <th>Spent</th>
            <th className="w-4 text-end"></th>
        </TrWrepper>
    )
}