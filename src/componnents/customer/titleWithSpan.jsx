import Paragrap from "../../library/paragrap";
import TitleSecond from "../../library/titleSecond";


export default function TitleWithSpan(props){

    return(
        <div className="flex justify-between">
            <TitleSecond 
                            text={props.titleText}
            />

            <Paragrap 
                        text={props.paraText}
                        // style="normal"
            />
        </div>
    )
}