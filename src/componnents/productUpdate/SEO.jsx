import DivWrepper from "../../library/divWrepper";
import Input from "../../library/input";
import Lable from "../../library/lable";
import Paragrap from "../../library/paragrap";
import Textarea from "../../library/textarea";
import TitleSecond from "../../library/titleSecond";


export default function SerchEngineOptimiz(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Search engine optimization"
            />

            <Paragrap 
                        text="Provide information that will help improve the snippet and bring your product to the top of search engines."
            />

            <Lable 
                    forLab="text"
                    label="Page title"
            />

            <Input 
                    plecholder=""
                    type="text"
            />
                
            <Lable 
                    forLab="text"
                    label="Meta description"
            />

            <Textarea />
        </DivWrepper>
    )
}