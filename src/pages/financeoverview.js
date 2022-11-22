import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import TableWrapper from "../library/tableWrapper";
import OverviewTh from "../componnents/financeOverview/overviewTh";
import OverviewTd from "../componnents/financeOverview/overviewTd";


const customer = [
    {
        id: 1,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
    {
        id: 2,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
    {
        id: 3,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
    {
        id: 4,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
    {
        id: 5,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
    {
        id: 6,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
    {
        id: 7,
        orderNo: 343324,
        date: '11 November, 2022',
        fees: 6634,
        Vat: 33,
        WHT: 5423,
        commition:342
    },
]

export default function FinanceOverview(){

    return(
        <>
            <WrapperWithNavber>
                <TitleWithButton 
                                    title="Order Overview"
                                    btntext="New order"
                                    btnicon={AiOutlinePlus}
                                    btnStyle='hidden'
                />

                <DivWrepper>
                    <TableSearch />

                    <TableWrapper>
                        <OverviewTh />

                        {customer.map((item)=>(
                            
                            <OverviewTd 
                                        key={item.id}
                                        orderNo={item.orderNo}
                                        date={item.date}
                                        fees={item.fees}
                                        commition={item.commition}
                                        WHT={item.WHT}
                                        vat={item.Vat}
                            />
                        ))}
                    </TableWrapper>
                </DivWrepper>
            </WrapperWithNavber>
        </>
    )
}