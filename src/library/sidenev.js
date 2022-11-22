import LinkWithIcon from "./linkWithIcon";
import { AiFillDashboard, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsHandbagFill } from 'react-icons/bs';
import { FcDocument } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';
import { BiSupport, BiDonateHeart } from 'react-icons/bi';
import { FaHammer, FaFileArchive } from 'react-icons/fa';
import LeftLi from "./leftli";
import ProductNev from "../componnents/leftsite/productnev";
import { useState } from "react";
import CustomerNev from "../componnents/leftsite/customernev";
import OrderNav from "../componnents/leftsite/ordernav";
import FinanceNav from "../componnents/leftsite/financenav";
import SupportNav from "../componnents/leftsite/supportnav";
import logo from "../Images/loogo.jpg";


export default function SideNev(props){
    const [productNav, setPrductNav] = useState(false);
    const [customerNav, setcustomerNav] = useState(false);
    const [OrtderNav, setorderNav] = useState(false);
    const [financeNav, setfinanceNav] = useState(false);
    const [supportNav, setSupportNav] = useState(false);

    const ProductnavHandle = () =>{
        if(!productNav){
            setPrductNav(true)
        }else{
            setPrductNav(false)
        }
    }
    
    const CatagorisHandle = () =>{
        if(!customerNav){
            setcustomerNav(true)
        }else{
            setcustomerNav(false)
        }
    } 
    
    const OrderHandle = () =>{
        if(!OrtderNav){
            setorderNav(true)
        }else{
            setorderNav(false)
        }
    } 
    
    const FinanceHandle = () =>{
        if(!financeNav){
            setfinanceNav(true)
        }else{
            setfinanceNav(false)
        }
    } 
    
    const SupportHandle = () =>{
        if(!supportNav){
            setSupportNav(true)
        }else{
            setSupportNav(false)
        }
    } 

    return(
        <div className={`SideNav z-10 sidenavbg ${props.isleftShow ? '' : 'left-margin'}`}>
            <div className="cros-btn" onClick={props.onNavLefHandler}> <ImCancelCircle /> </div>

            <div className="mb-4">
                <img src={logo} alt="logo" className="m-auto h-16 rounded-lg"/>
            </div>

            <h1 className="text-gray-700 uppercase mb-3">Application</h1>

            <ul className="h-[80vh] pb-9 overflow-y-auto overflow-x-hidden">
                <LinkWithIcon 
                                text='Dashboard'
                                icon={AiFillDashboard}
                                path='/'
                />

                <ul className={`left-li ${productNav? 'pb-3' :''}`}>
                    <LeftLi 
                            icon={BsHandbagFill}
                            text='Product'
                            onProductnavHandle={ProductnavHandle}
                    />

                    {productNav && <ProductNev />}
                </ul>
                
                <ul className={`left-li ${customerNav? 'pb-3' :''}`}>
                    <LeftLi 
                            icon={AiOutlineUser}
                            text='Customer'
                            onProductnavHandle={CatagorisHandle}
                    />

                    {customerNav && <CustomerNev />}
                </ul>
                
                <LinkWithIcon 
                                text='File Manager'
                                icon={FaFileArchive}
                                path='/File-Manager'
                />
                
                <ul className={`left-li ${OrtderNav? 'pb-3' :''}`}>
                    <LeftLi 
                            icon={FaHammer}
                            text='Order'
                            onProductnavHandle={OrderHandle}
                    />

                    {OrtderNav && <OrderNav />}
                </ul>
                
                <ul className={`left-li ${financeNav? 'pb-3' :''}`}>
                    <LeftLi 
                            icon={AiOutlineShoppingCart}
                            text='Finance'
                            onProductnavHandle={FinanceHandle}
                    />

                    {financeNav && <FinanceNav />}
                </ul>
                
                <ul className={`left-li ${supportNav? 'pb-3' :''}`}>
                    <LeftLi 
                            icon={BiSupport}
                            text='Support'
                            onProductnavHandle={SupportHandle}
                    />

                    {supportNav && <SupportNav />}
                </ul>
                
                {/* <LinkWithIcon 
                                text='Account Health'
                                icon={BiDonateHeart}
                                path='/Account-Health'
                /> */}
                
                <LinkWithIcon 
                                text='Sellar Document'
                                icon={FcDocument}
                                path='/Sellar-Document'
                />
            </ul>
        </div>
    )
}