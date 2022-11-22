import LeftLink from "../../library/leftlink";

export default function CustomerNev(){

    return(
        <>
            <LeftLink 
                        text='Customers List'
                        path='/Customers-list'
            />

            <LeftLink 
                        text='Customers'
                        path='/Customers'
            />
        </>
    )
}