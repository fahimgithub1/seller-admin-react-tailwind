import FlexWrapper from "../../layout/flexWrapper";
import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import Lable from "../../library/lable";
import TitleSecond from "../../library/titleSecond";


export default function Inventory(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Inventory"
            />

            <FlexWrapper>
                <Lable 
                        forLab="text"
                        label="SKU"
                />

                <Input 
                        plecholder="SCREW150"
                        type="text"
                />
                
                <Lable 
                        forLab="text"
                        label="Stock quantity"
                />

                <Input 
                        plecholder="18"
                        type="number"
                />
            </FlexWrapper>
        </DivWrepper>
    )
}