import { HiMenuAlt2, HiSearch, HiBell } from 'react-icons/hi';
import userImg from '../Images/userimg1.png';
import logo from '../Images/loogo.jpg';

export default function  TopNav(props){

    return(
        <div className={`top-nav p-3 ${props.isFullWidth ? '' : 'top-nav-full'}`}>
            <div className="flex items-center justify-between">
                <div className="lg:w-8/12 items-center flex">
                    <div className='text-4xl mr-3 cursor-pointer' onClick={props.onNavLefHandler}> <HiMenuAlt2 /> </div>
                    <img src={logo}  alt='logo' className='lg:hidden h-11'/>
                    <form className='hidden lg:block relative'>
                        <input className='rounded-lg h-8 w-72' />
                        <span className='absolute top-1 left-2 text-gray-600 text-2xl' > <HiSearch />  </span>
                    </form>
                </div>
                
                <div className="w-4/12 items-center flex justify-end">
                    <div className='lg:hidden mr-3'>
                        <span className='text-2xl' > <HiSearch />  </span>
                    </div>

                    <div className='text-2xl mr-3 relative'> 
                        <HiBell />
                        <span className='absolute right-[-7px] top-[-10px] text-sm text-center bg-yellow-600 rounded-full h-5 w-5'>
                            2
                        </span>
                    </div>
                    {/* <img src=''  alt=''/> */}
                    <div className='flex items-center'>
                        <div className='text-4xl mr-3 h-10 w-10 rounded-full overflow-hidden'>
                            {/* <HiUserCircle /> */}
                            <img src={userImg} alt='UserPic'/>
                        </div>

                        <div className='hidden md:block'>
                            <p className='font-semibold mb-0'>Tarikul Islam</p>
                            <span>face@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}