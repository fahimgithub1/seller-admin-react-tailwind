import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import InputRadio from "../../library/inputRadio";
import Lable from "../../library/lable";
import TitleSecond from "../../library/titleSecond";


export default function Visibility(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Visibility"
            />

            <div  className="flex justify-start my-2">
                <InputRadio  />
                <span className="font-semibold">Published</span>
            </div>

            <div  className="flex justify-start my-2">
                <InputRadio  />
                <span className="font-semibold">Scheduled</span>
            </div>

            <div  className="flex justify-start my-2">
                <InputRadio  />
                <span className="font-semibold">Hidden</span>
            </div>

            <Lable 
                    forLab="text"
                    label="Publish date"
            />

            <Input 
                    plecholder=""
                    type="date"
            />
        </DivWrepper>
    )
}