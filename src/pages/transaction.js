import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import TableWrapper from "../library/tableWrapper";
import TransctionTh from "../componnents/Transction/transctionTh";
import TransctionTd from "../componnents/Transction/transctionTd";

const customer = [
    {
        id: 1,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
    {
        id: 2,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
    {
        id: 3,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
    {
        id: 4,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
    {
        id: 5,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
    {
        id: 6,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
    {
        id: 7,
        tranNo: 343324,
        date: '11 November, 2022',
        amount: 6634,
        vat: 33,
        comment: "Ftist Transection it is!",
        commition:342
    },
]

export default function Transction(){

    return(
        <>
            <WrapperWithNavber>
                <TitleWithButton 
                                    title="Transaction Overview"
                                    btntext="New order"
                                    btnicon={AiOutlinePlus}
                                    btnStyle='hidden'
                />

                <DivWrepper>
                    <TableSearch />

                    <TableWrapper>
                        <TransctionTh />

                        {customer.map((item)=>(
                            <TransctionTd 
                                        key={item.id}
                                        tranNo={item.tranNo}
                                        date={item.date}
                                        amount={item.amount}
                                        statement={item.commition}
                                        comment={item.comment}
                                        vat={item.vat}
                            />
                        ))}
                    </TableWrapper>
                </DivWrepper>
            </WrapperWithNavber>
        </>
    )
}