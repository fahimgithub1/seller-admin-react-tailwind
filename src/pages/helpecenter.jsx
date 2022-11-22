import HelpCommonDiv from "../componnents/helpCenter/helpCommonDiv";
import WrapperWithNavber from "../library/wraperWithNavber";

const divInfo=[
    {
        id : 1,
        text : 'Add Product'
    },
    {
        id : 2,
        text : 'Add user'
    },
    {
        id : 3,
        text : 'Compliance Policy Summary'
    },
    {
        id : 4,
        text : 'Hub Timing'
    },
    {
        id : 5,
        text : 'Order Re-verificatin'
    },
    {
        id : 6,
        text : 'Relisting Form'
    },
    {
        id : 7,
        text : 'Seller Commission'
    },
    {
        id : 8,
        text : 'Track Product Performance'
    },
]


const divInfo2=[
    {
        id : 1,
        text : 'Announcements & Campaigns'
    },
    {
        id : 2,
        text : 'Policies & Guidelines'
    },
    {
        id : 3,
        text : 'Order Management'
    },
    {
        id : 4,
        text : 'Payments'
    },
    {
        id : 5,
        text : 'Perfotmance Enhancement'
    },
    {
        id : 6,
        text : 'Returns & Claims'
    },
    {
        id : 7,
        text : 'Sell On Site'
    },
    {
        id : 8,
        text : 'Seller-Byer Communication'
    },
]

export default function HelpeCente(){

    return(
        <WrapperWithNavber>
            <HelpCommonDiv title='Self Service Tools' data={divInfo} />
            <HelpCommonDiv title='Categories' data={divInfo2} />
        </WrapperWithNavber>
    )
}