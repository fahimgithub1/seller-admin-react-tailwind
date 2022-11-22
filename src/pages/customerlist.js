import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import TableWrapper from "../library/tableWrapper";
import CustomersTd from "../componnents/customersList/customersTd";
import CustomersTh from "../componnents/customersList/customersTh";

const customer = [
    {
        id: 1,
        name: "Adam Taylot",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "Russia",
        group: "Defult",
        spent: '$325765'
    },
    {
        id: 2,
        name: "Tuhin Buny",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "Russia",
        group: "Defult",
        spent: '$325765'
    },
    {
        id: 3,
        name: "jahid hase",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "bangladesh",
        group: "Defult",
        spent: '$325765'
    },
    {
        id: 4,
        name: "Fahim pat",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "Russia",
        group: "Defult",
        spent: '$325765'
    },
    {
        id: 5,
        name: "Adam Taylot",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "Russia",
        group: "Defult",
        spent: '$325765'
    },
    {
        id: 6,
        name: "jannat beg",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "Russia",
        group: "Defult",
        spent: '$325765'
    },
    {
        id: 7,
        name: "Joha sir",
        image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        reg: "May 15,2021",
        country: "Russia",
        group: "Defult",
        spent: '$325765'
    },
]

export default function Customer(){

    return(
        <>
            <WrapperWithNavber>
                <TitleWithButton 
                                    title="Categoris"
                                    btntext="Update"
                                    btnicon={AiOutlinePlus}
                />

                <DivWrepper>
                    <TableSearch />

                    <TableWrapper>
                        <CustomersTh />

                        {customer.map((item)=>(
                            
                            <CustomersTd 
                                        key={item.id}
                                        name={item.name}
                                        image={item.image}
                                        reg={item.reg}
                                        country={item.country}
                                        group={item.group}
                                        spent={item.spent}
                            />
                        ))}
                    </TableWrapper>
                </DivWrepper>
            </WrapperWithNavber>
        </>
    )
}