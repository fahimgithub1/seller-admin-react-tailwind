import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";

export default function CatagorisTh(){

    return(
        <TrWrepper>
        <th className="h-5 w-5 text-center">
            <InputChecK />
        </th>
        <th>name</th>
        <th>item</th>
        <th>Visibility</th>
        <th className="w-4 text-end"></th>
      </TrWrepper>
    )
}