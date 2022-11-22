import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import TitleSecond from "../../library/titleSecond";


export default function Categories(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Categories"
            />

            <Input 
                    plecholder=""
                    type="text"
            />
        </DivWrepper>
    )
}