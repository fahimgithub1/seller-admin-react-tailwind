import Paragrap from "../../library/paragrap";
import Titlethird from "../../library/titlethird";
// import img from "../../Images/download-removebg-preview (1).png";

export default function FileItem(props){


    return(
        <div className="md:w-4/12 p-2">
            <div className="border-[1px] border-gray-400  rounded-lg hover:bg-blue-500 cursor-pointer bg-blue-300 overflow-hidden" >
                <div className="h-[220px] w-full flex items-center justify-center overflow-hidden">
                    <img src={props.img} alt="folder icon" className="rounded-lg" />
                </div>
                <div className="bg-white p-3 text-center ">
                    <Titlethird 
                                    text={props.fileName}
                                    styles="mb-1 text-normal font-lg"
                    />
                    <Paragrap 
                                    text={props.fileSize}
                                    styles='mb-0 pb-0'
                    />
                </div>
            </div>
         </div>
    )
}