import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import TableWrapper from "../library/tableWrapper";
import ReturnTh from "../componnents/productReturn/returnTh";
import ReturnTd from "../componnents/productReturn/returhTd";

const customer = [
    {
        id: 1,
        name: "Adam Taylot",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
    {
        id: 2,
        name: "Tuhin Buny",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
    {
        id: 3,
        name: "jahid hase",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
    {
        id: 4,
        name: "Fahim pat",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
    {
        id: 5,
        name: "Adam Taylot",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
    {
        id: 6,
        name: "jannat beg",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
    {
        id: 7,
        name: "Joha sir",
        amount: 2432,
        status: "New",
        reason: 'dont need',
        comment: "hi Ima fahim patowary. hello world"
    },
]

export default function ProductReturn(){

    return(
        <>
            <WrapperWithNavber>
                <TitleWithButton 
                                    title="Product Returns"
                                    btntext="New order"
                                    btnicon={AiOutlinePlus}
                                    btnStyle='hidden'
                />

                <DivWrepper>
                    <TableSearch />

                    <TableWrapper>
                        <ReturnTh />

                        {customer.map((item)=>(
                            
                            <ReturnTd 
                                        key={item.id}
                                        name={item.name}
                                        amount={item.amount}
                                        status={item.status}
                                        reason={item.reason}
                                        comment={item.comment}
                            />
                        ))}
                    </TableWrapper>
                </DivWrepper>
            </WrapperWithNavber>
        </>
    )
}