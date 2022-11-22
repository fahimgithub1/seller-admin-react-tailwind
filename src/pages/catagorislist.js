import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import TableWrapper from "../library/tableWrapper";
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import CatagorisTh from "../componnents/catagorisList/catagorisTh";
import CatagorisTd from "../componnents/catagorisList/categorisTd";

const Product = [
    {
        name:"Mouse",
        quantity: 4
    },
    {
        name:"Pen",
        quantity: 40
    },
    {
        name:"Laptop",
        quantity: 1
    },
    {
        name:"Air Phon",
        quantity: 4
    },
    {
        name:"Table",
        quantity: 32
    },
    {
        name:"Book",
        quantity: 4
    },
    {
        name:"Bag",
        quantity: 4
    },
    {
        name:"Peper",
        quantity: 24
    },
    {
        name:"TWS",
        quantity: 4
    },
]

export default function CategorisList(){

    return(
        <WrapperWithNavber>
            <TitleWithButton 
                                title="Categoris"
                                btntext="Update"
                                btnicon={AiOutlinePlus}
            />

            <DivWrepper>
                <TableSearch />

                <TableWrapper>
                <CatagorisTh />

                    {Product.map((item)=>(
                        
                        <CatagorisTd 
                                    productName={item.name}
                                    productItem={item.quantity}
                        />
                    ))}
                </TableWrapper>
            </DivWrepper>
        </WrapperWithNavber>
    )
}