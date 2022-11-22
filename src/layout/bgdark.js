

export default function BgDark(props){

    return(
        <div className="h-screen w-screen absolute left-0 top-0 bg-slate-600 opacity-40 lg:hidden" 
             onClick={props.onNavLefHandler}
        >

        </div>
    )
}