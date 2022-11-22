import Titlethird from "../../library/titlethird";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Paragrap from "../../library/paragrap";


export default function AddressItem(props){


    return(
        <div className="flex items-center py-2 justify-between border-y-[1px] border-gray-600">
            <div>
                <Titlethird 
                                text={props.name}
                                styles='mb-1'
                />

                <Paragrap 
                            text={props.address}
                            styles='text-sm mb-0'
                />
            </div>

            <BiDotsVerticalRounded />
        </div>
    )
}