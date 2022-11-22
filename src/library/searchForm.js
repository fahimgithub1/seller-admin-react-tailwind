import { FaSearch } from 'react-icons/fa';

export default function SearchForm(){

    return(
        <form className='relative'>
            <input className="w-full h-10 rounded-md pl-8" placeholder='search' />
            <lable className="absolute top-2.5 left-2 cursor-pointer text-xl" > <FaSearch />  </lable>
        </form>
    )
}