import { useState } from "react";
import BgDark from "../layout/bgdark";
import SideNev from "./sidenev";
import TopNav from "./topnav";


export default function WrapperWithNavber(props){
    const [leftShow, setLeftShow] = useState(true);

    const NavLefHandler = () =>{

        if(!leftShow){
            setLeftShow(true);
        }else{
            setLeftShow(false);
        }
    }

    return(
        <>
            <TopNav onNavLefHandler={NavLefHandler} isFullWidth={leftShow}/>
            {/* {leftShow && <SideNev />} */}
            
            {!leftShow && <BgDark  onNavLefHandler={NavLefHandler}/>}
            <SideNev
                    isleftShow={leftShow}
                    onNavLefHandler={NavLefHandler}
            />

            <div className={`warrper-div ${leftShow ? '' : 'warrper-div-clicked'}`}>
                {props.children}
            </div>
        </>
    )
}