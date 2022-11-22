import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import TitleSecond from "../../library/titleSecond";


export default function PrentCatagoris(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Prent Categories"
            />

            <Input 
                    plecholder=""
                    type="text"
            />
        </DivWrepper>
    )
}