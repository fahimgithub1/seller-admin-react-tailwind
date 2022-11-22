import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import TableWrapper from "../library/tableWrapper";
import OrdersTh from "../componnents/order/orderTh";
import OrderTd from "../componnents/order/ordersTd";

const customer = [
    {
        id: 1,
        name: "Adam Taylot",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
    {
        id: 2,
        name: "Tuhin Buny",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
    {
        id: 3,
        name: "jahid hase",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
    {
        id: 4,
        name: "Fahim pat",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
    {
        id: 5,
        name: "Adam Taylot",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
    {
        id: 6,
        name: "jannat beg",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
    {
        id: 7,
        name: "Joha sir",
        number: 34329,
        date: "May 15,2021",
        paid: 2432,
        status: "New",
        items: 32,
        total: 3204,
    },
]

export default function Customer(){

    return(
        <>
            <WrapperWithNavber>
                <TitleWithButton 
                                    title="Orders"
                                    btntext="New order"
                                    btnicon={AiOutlinePlus}
                />

                <DivWrepper>
                    <TableSearch />

                    <TableWrapper>
                        <OrdersTh />

                        {customer.map((item)=>(
                            
                            <OrderTd 
                                        key={item.id}
                                        name={item.name}
                                        number={item.number}
                                        date={item.date}
                                        paid={item.paid}
                                        status={item.status}
                                        total={item.total}
                                        items={item.items}
                            />
                        ))}
                    </TableWrapper>
                </DivWrepper>
            </WrapperWithNavber>
        </>
    )
}