import FlexWrapper from "../../layout/flexWrapper";
import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import Lable from "../../library/lable";
import TitleSecond from "../../library/titleSecond";


export default function Pricediv(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Priceing"
            />

            <FlexWrapper>
                <div className="w-6/12 pr-2">
                    <Lable 
                            forLab="price"
                            label="Price"
                    />

                    <Input 
                            placeholder="1449"
                            type="number"
                    />
                </div>
                
                <div className="w-6/12 pl-2">
                    <Lable 
                            forLab="price"
                            label="Old Price"
                    />

                    <Input 
                            plecholder=""
                            type="number"
                    />
                </div>
            </FlexWrapper>
        </DivWrepper>
    )
}