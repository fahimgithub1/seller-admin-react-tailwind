

export default function TableWrapper(props){

    return(
        <div className="overflow-x-auto">
            <table className="teble">
                {props.children}
            </table>
        </div>
    )
}