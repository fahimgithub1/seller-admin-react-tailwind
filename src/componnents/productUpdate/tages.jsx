import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import TitleSecond from "../../library/titleSecond";


export default function Tages(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Tags"
            />

            <Input 
                    plecholder=""
                    type="text"
            />
        </DivWrepper>
    )
}