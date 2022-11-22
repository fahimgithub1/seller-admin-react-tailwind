import BlueSpan from "../../library/blueSpan";


export default function OrdersTd(props){

    return(
        <tr className="border-[1px] border-y-gray-400">
            <td>
                <BlueSpan 
                            text={props.orderID}
                />
            </td>
            <td>{props.time}</td>
            <td>{props.status}</td>
            <td>{props.items}items</td>
            <td>Tk{props.price}</td>
        </tr>
    )
}