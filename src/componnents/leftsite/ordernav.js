import LeftLink from "../../library/leftlink";

export default function OrderNav(){

    return(
        <>
            <LeftLink 
                        text='Order List'
                        path='/order-list'

            />

            <LeftLink 
                        text='Priduct Retun'
                        path='/Product-Return'
            />
        </>
    )
}