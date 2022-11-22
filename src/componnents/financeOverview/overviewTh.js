import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function OverviewTh(){

    return(
        <TrWrepper>
            <th className="h-5 w-5 text-center">
                <InputChecK />
            </th>
            <th>order no</th>
            <th>date</th>
            <th>fees</th>
            <th>commition</th>
            <th>vat</th>
            <th>WHT</th>
            <th className="w-4 text-end"></th>
        </TrWrepper>
    )
}