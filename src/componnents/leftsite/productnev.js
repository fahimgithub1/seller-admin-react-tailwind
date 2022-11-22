import LeftLink from "../../library/leftlink";


export default function ProductNev(){

    return(
        <>
            <LeftLink 
                        text='Product List'
                        path="/Product-list"
            />

            <LeftLink 
                        text='Product Add'
                        path="/Product-Uplode"
            />

            <LeftLink 
                        text='Categoris List'
                        path="/Categoris-list"
                    />

            <LeftLink 
                        text='Categoris Add'
                        path="/Categoris-Uplode"
            />
        </>
    )
}