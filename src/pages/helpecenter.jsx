import HelpCommonDiv from "../componnents/helpCenter/helpCommonDiv";
import WrapperWithNavber from "../library/wraperWithNavber";
import { BsFillBagPlusFill, BsGraphUp, BsArrowReturnLeft } from 'react-icons/bs';
import { FaUserEdit, FaRegNewspaper, FaMoneyBillAlt, FaCertificate } from 'react-icons/fa';
import { MdPolicy, MdOutlineVerified, MdOutlineTrackChanges, MdOutlineMenuBook, MdOutlinePayments, MdSell } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { TfiAnnouncement } from 'react-icons/tfi';
import { RiFilePaper2Fill } from 'react-icons/ri';

const divInfo=[
    {
        id : 1,
        text : 'Add Product',
        icon : <BsFillBagPlusFill className="m-auto" />
    },
    {
        id : 2,
        text : 'Add user',
        icon : <FaUserEdit className="m-auto" />
    },
    {
        id : 3,
        text : 'Compliance Policy Summary',
        icon : <MdPolicy className="m-auto" />
    },
    {
        id : 4,
        text : 'Hub Timing',
        icon : <BiTime className="m-auto" />
    },
    {
        id : 5,
        text : 'Order Re-verificatin',
        icon : <MdOutlineVerified className="m-auto" />
    },
    {
        id : 6,
        text : 'Relisting Form',
        icon : <FaRegNewspaper className="m-auto" />
    },
    {
        id : 7,
        text : 'Seller Commission',
        icon : <FaMoneyBillAlt className="m-auto" />
    },
    {
        id : 8,
        text : 'Track Product Performance',
        icon : <MdOutlineTrackChanges  className="m-auto" />
    },
]


const divInfo2=[
    {
        id : 1,
        text : 'Announcements & Campaigns',
        icon : <TfiAnnouncement className="m-auto" />
    },
    {
        id : 2,
        text : 'Policies & Guidelines',
        icon : <FaCertificate className="m-auto" />
    },
    {
        id : 3,
        text : 'Order Management',
        icon : <MdOutlineMenuBook className="m-auto" />
    },
    {
        id : 4,
        text : 'Payments',
        icon : <MdOutlinePayments className="m-auto" />
    },
    {
        id : 5,
        text : 'Perfotmance Enhancement',
        icon : <BsGraphUp className="m-auto" />
    },
    {
        id : 6,
        text : 'Returns & Claims',
        icon : <BsArrowReturnLeft className="m-auto" />
    },
    {
        id : 7,
        text : 'Sell On Site',
        icon : <MdSell className="m-auto" />
    },
    {
        id : 8,
        text : 'Seller-Byer Communication',
        icon : <RiFilePaper2Fill  className="m-auto" />
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