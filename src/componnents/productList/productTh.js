import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";


export default function ProductTh(){

    return(
      <TrWrepper>
        <th className="h-5 w-5 text-center">
            <InputChecK />
        </th>
        <th>name</th>
        <th>Catwgory</th>
        <th>Stock</th>
        <th>price</th>
        <th className="w-4 text-end"></th>
      </TrWrepper>  
    )
}