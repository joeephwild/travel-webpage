import React, { useState } from "react";
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import  { MdClose } from 'react-icons/md'


const Navbar = () => {
     const [nav, setNav] = useState(false)
     const handleNav =() => {
         setNav(!nav)
     }

   const style = {
     container: 'flex z-[100] top-0 absolute justify-between px-6  items-center bg-transparent w-full',
     links: 'flex space-x-4 hidden font-bold lg:flex',
     brandImg: 'cursor-pointer',
     toogle: 'block z-10 p-4 md:hidden',
     linkitems: 'flex text-white space-x-4',
     mdLink: 'flex-col p-42 text-white m-[40%] text-xl lg:text-3xl space-y-12 border-r-gray-900 '
}
       return <div className={style.container}>
        <div className={style.brandImg}>
            <h1 className="text-pink-600 font-bold text-2xl">TRAVEL</h1>
        </div>
        <div className={style.links}>
            <ul className={style.linkitems}>
                <li>Home</li>
                <li>Destination</li>
                <li>offer</li>
                <li>Tour</li>
            </ul>
        </div>
        <div onClick={handleNav} className={style.toogle}>
          {nav ? <MdClose /> : <GiHamburgerMenu />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full flex-col p-42 border-r-gray-900 ease-in-out duration-500 bg-pink-600' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <ul className={style.mdLink}>
                <li>Home</li>
                <li>Destination</li>
                <li>offer</li>
                <li>Tour</li>
            </ul>
        </div>
  </div>;
};

export default Navbar;


