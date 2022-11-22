import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import FlexWrapper from "../layout/flexWrapper";
import Customerprofile from "../componnents/customer/customerProfile";
import CustomerOrderList from "../componnents/customer/customerOrderList";
import CustomerAddress from "../componnents/customer/customerAddress";


export default function Customers(){

    return(
        <WrapperWithNavber>
            <TitleWithButton 
                                title="customer"
                                btntext="Update"
                                // btnStyle="hidden"
                                btnicon={AiOutlinePlus}
            />


            <FlexWrapper>
                <div className="w-full md:w-4/12 md:pr-2">
                    <Customerprofile />
                </div>
                
                <div className="w-full md:w-8/12 md:pl-2">
                    <CustomerOrderList />
                    <CustomerAddress />
                </div>
            </FlexWrapper>
                
        </WrapperWithNavber>
    )
}