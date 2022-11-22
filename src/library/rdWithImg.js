


export default function RdWithImg(props){

    return(
        <>
            <img  className="h-8 w-8 mr-1 rounded-md"  
                  src={props.image} alt="product"/>
            {props.name}
        </>
    )
}