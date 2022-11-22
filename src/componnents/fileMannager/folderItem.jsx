import Paragrap from "../../library/paragrap";
import Titlethird from "../../library/titlethird";
import img from "../../Images/download-removebg-preview (1).png";

export default function FolderItem(props){


    return(
        <div className="md:w-4/12 p-2">
            <div className="border-[1px] flex items-center border-gray-400 p-3 rounded-lg bg-white cursor-pointer hover:bg-blue-300" >
                <div>
                    <img src={img} alt="folder icon" className="h-10 mr-2" />
                </div>
                <div>
                    <Titlethird 
                                    text={props.catagoryName}
                                    styles="mb-1"
                    />
                    <Paragrap 
                                    text={props.catagoryItems}
                                    styles='mb-0 pb-0'
                    />
                </div>
            </div>
         </div>
    )
}