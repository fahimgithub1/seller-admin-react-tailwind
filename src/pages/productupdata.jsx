import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import FlexWrapper from "../layout/flexWrapper";
import BasicInfo from "../componnents/productUpdate/basicInfo";
import Pricediv from "../componnents/productUpdate/priceDiv";
import Inventory from "../componnents/productUpdate/inventory";
import SerchEngineOptimiz from "../componnents/productUpdate/SEO";
import Visibility from "../componnents/productUpdate/visibility";
import Categories from "../componnents/productUpdate/categories";
import Tages from "../componnents/productUpdate/tages";


export default function ProductUpdate(){

    return(
        <WrapperWithNavber>
            <TitleWithButton 
                                title="Edit Product"
                                btntext="save"
                                btnStyle="hidden"
                                btnicon={AiOutlinePlus}
            />


            <FlexWrapper>
                <div className="w-full md:w-8/12 md:pr-2">
                    <BasicInfo />
                    <Pricediv />
                    <Inventory />
                    <SerchEngineOptimiz />
                </div>
                
                <div className="w-full md:w-4/12 md:pl-2">
                    <Visibility />
                    <Categories />
                    <Tages />
                </div>
            </FlexWrapper>
                
        </WrapperWithNavber>
    )
}