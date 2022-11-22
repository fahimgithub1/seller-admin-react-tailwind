import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import Lable from "../../library/lable";
import Textarea from "../../library/textarea";
import TitleSecond from "../../library/titleSecond";

export default function CaBasicInfo(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Basic information"
            />

            <Lable 
                    label='Name'
                    forLab='name'
            />
            <Input 
                    placeholder="Brandix Screwdriver SCREW150"
            />

            <Lable 
                    label='Slug'
                    forLab='slug'
            />
            <Input 
                    placeholder="brandix-screwdriver-screw150"
            />

            <Lable 
                    label='Description'
                    forLab='text'
            />
            <Textarea 
            
            />

        </DivWrepper>
    )
}