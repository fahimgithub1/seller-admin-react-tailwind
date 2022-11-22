// import BlueSpan from "../../library/blueSpan";
import DivWrepper from "../../library/divWrepper";
import TableWrapper from "../../library/tableWrapper";
import OrdersTd from "./ordersTd";
import TitleWithSpan from "./titleWithSpan";

const OrderlistCus=[
    {
        id : 1,
        orderID : "#80294",
        time : 'Today at 6:10 pm',
        status : 'Pending',
        items : 4,
        price : 342
    },
    {
        id : 2,
        orderID : "#80294",
        time : 'Today at 6:10 pm',
        status : 'Pending',
        items : 4,
        price : 342
    },
    {
        id : 3,
        orderID : "#80294",
        time : 'Today at 6:10 pm',
        status : 'Pending',
        items : 4,
        price : 342
    },
    {
        id : 4,
        orderID : "#80294",
        time : 'Today at 6:10 pm',
        status : 'Pending',
        items : 4,
        price : 342
    },
]

export default function CustomerOrderList(){

    return(
        <DivWrepper>
            <TitleWithSpan
                            titleText='Orders'
                            paraText='Total spent $34,980.34 on 7 orders'
            />

            <TableWrapper>
                {OrderlistCus.map((item)=>(
                    <OrdersTd 
                                key={item.id}
                                orderID={item.orderID}
                                time={item.time}
                                status={item.status}
                                items={item.items}
                                price={item.price}
                    />
                ))}
                
            </TableWrapper>

            {/* <BlueSpan 
                        text="View All"
            /> */}
        </DivWrepper>
    )
}