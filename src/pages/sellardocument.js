import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import TableWrapper from "../library/tableWrapper";
import SellerTh from "../componnents/sellerDocument/sellerTh";
import SellerTd from "../componnents/sellerDocument/sellerTd";

const sellerDate = [
    {
        id: 1,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
    {
        id: 2,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
    {
        id: 3,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
    {
        id: 4,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
    {
        id: 5,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
    {
        id: 6,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
    {
        id: 7,
        name: "Fahim Patowary",
        sellerId: 11,
        type: 'Dress Shop',
        area: "cumilla",
        scope: "Cloth",
        status: "Active" 
    },
]

export default function Transction(){

    return(
        <>
            <WrapperWithNavber>
                <TitleWithButton 
                                    title="Seller Document"
                                    btntext="New order"
                                    btnicon={AiOutlinePlus}
                                    btnStyle='hidden'
                />

                <DivWrepper>
                    <TableSearch />

                    <TableWrapper>
                        <SellerTh />

                        {sellerDate.map((item)=>(
                            <SellerTd 
                                        key={item.id}
                                        sellerId={item.sellerId}
                                        name={item.name}
                                        type={item.type}
                                        area={item.area}
                                        scope={item.scope}
                                        status={item.status}
                            />
                        ))}
                    </TableWrapper>
                </DivWrepper>
            </WrapperWithNavber>
        </>
    )
}