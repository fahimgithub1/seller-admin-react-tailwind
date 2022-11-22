import DivWrepper from "../../library/divWrepper";
import ImageDiv from "../../library/imageDiv";
import TitleSecond from "../../library/titleSecond";


export default function CategoriImage(){


    return(
        <DivWrepper>
            <TitleSecond 
                            text="Image"
            />
            <ImageDiv />
            <span className="text-md mr-3 font-semibold text-blue-600 cursor-pointer">Replace image</span>
            <span className="text-md font-semibold text-red-600 cursor-pointer">Remove image</span>
        </DivWrepper>
    )
}