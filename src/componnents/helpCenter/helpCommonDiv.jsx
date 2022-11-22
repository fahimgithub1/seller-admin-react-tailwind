import DivWrepper from "../../library/divWrepper";
import HelpItem from "./helpItem";


export default function HelpCommonDiv(props){


    return(
        <DivWrepper>
                <h3 className="text-center font-bold text-lg mb-3">{props.title}</h3>

                <div className="flex flex-wrap justify-center">
                    {props.data.map((item)=>(
                        <HelpItem 
                                    key={item.id}
                                    text={item.text}
                        />
                    ))}
                </div>
            </DivWrepper>
    )
}