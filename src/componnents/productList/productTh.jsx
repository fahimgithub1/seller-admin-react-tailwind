import InputChecK from "../../library/inputChecK";
import TrWrepper from "../../library/trWrepper";


export default function ProductTh(){

    return(
      <TrWrepper>
        <th className="h-5 max-w-5 max-w-[20px] text-left">
            <InputChecK />
        </th>
        <th className="min-w-min">name</th>
        <th>Catwgory</th>
        <th>Stock</th>
        <th>price</th>
        <th className="w-4 text-end"></th>
      </TrWrepper>  
    )
}