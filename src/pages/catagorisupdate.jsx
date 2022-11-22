import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import FlexWrapper from "../layout/flexWrapper";
import SerchEngineOptimiz from "../componnents/productUpdate/SEO";
import Visibility from "../componnents/productUpdate/visibility";
import CaBasicInfo from "../componnents/categorisUpdate/basicInfo";
import PrentCatagoris from "../componnents/categorisUpdate/prentCatagoris";
import CategoriImage from "../componnents/categorisUpdate/categoriImage";


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
                    <CaBasicInfo />
                    <SerchEngineOptimiz />
                </div>
                
                <div className="w-full md:w-4/12 md:pl-2">
                    <Visibility />
                    <PrentCatagoris />
                    <CategoriImage />
                </div>
            </FlexWrapper>
                
        </WrapperWithNavber>
    )
}