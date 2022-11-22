import LeftLink from "../../library/leftlink";

export default function FinanceNav(){

    return(
        <>
            <LeftLink 
                        text='Transectin'
                        path='/Transection'
            />

            <LeftLink 
                        text='Order Overview'
                        path='/Finance-Overview'
            />
        </>
    )
}