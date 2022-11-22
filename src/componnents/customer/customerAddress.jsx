// import BlueSpan from "../../library/blueSpan";
import BlueSpan from "../../library/blueSpan";
import DivWrepper from "../../library/divWrepper";
import TitleSecond from "../../library/titleSecond";
import AddressItem from "./addressItem";

const AddressBook=[
    {
        id : 1,
        name : 'Jessica Moore',
        address : 'Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178'
    },
    {
        id : 2,
        name : 'Jessica Moore',
        address : 'Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178'
    },
    {
        id : 3,
        name : 'Jessica Moore',
        address : 'Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178'
    }
]

export default function CustomerAddress(){

    return(
        <DivWrepper>
            <div className="flex items-center justify-between">
                <TitleSecond
                                text='Address'
                />

                <BlueSpan 
                            text="New address"
                            classes="-mt-2"
                />
            </div>

            {AddressBook.map((item)=>(
                <AddressItem 
                                key={item.id}
                                name={item.name}
                                address={item.address}
                />

            ))}

        </DivWrepper>
    )
}