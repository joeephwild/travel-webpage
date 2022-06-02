import React, { useState } from "react";
import Image from 'next/image'
import Navbar from '../components/Navbar'
import hero from '../public/assets/herobg.jpg'

const Hero = () => {
    const [value, setValue] = useState('$500 - $6000');
    
   

  return <div  className="relative h-[400px] sm:h-[500px] l;g:[600px] 2xl:h-[700px]">
      <Navbar />
     <Image src={hero} layout="fill" objectFit="cover" alt="" />
     <div className="absolute space-y-3 top-1/2 w-full text-center">
       <h1 className="lg:text-3xl text-lg md:text-xl font-bold tracking-widest">Its Time To Explore The World</h1>
       <button className="bg-pink-600 py-3 px-2 text-white rounded-2xl">plan your trip</button>
    
     <div className="hidden bg-white lg:flex flex-col items-center border-4 rounded-full border-pink-600 border-solid p-3 ">
     <form>
         <label className="text-slate-300 py-2">Where to</label>
         <select className="text-pink-600 px-5 border-none outline-none focus:outline-none">
             <option>Nigeria</option>
             <option>United Kingdom</option>
         </select>
         <label className="text-slate-300 py-2">Check in</label>
         <input type="date" className="text-pink-600 px-5 border-none outline-none focus:outline-none"/>
         <label className="text-slate-300 py-2">Price</label>
         <input  type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-pink-600 px-5 border-none outline-none focus:outline-none"/>
         <button className="bg-pink-600 px-3 py-2 rounded-full">submit</button>
     </form>
      </div>
    </div>


    <div className="bg-white absolute border-bold border-pink-600 border-4 bottom-[-12rem] left-0 p-[2rem] lg:hidden block">
     <form className="flex-col space-y-12 items-center justify-end gap-[3rem]">
         <div className="flex-col text-start">
         <label className="text-slate-300 py-2">Where to</label>
         <select className="text-pink-600 px-5  border-none outline-none focus:outline-none">
             <option>Nigeria</option>
             <option>United Kingdom</option>
         </select>
         </div>
         <div>
         <label className="text-slate-300 py-2">Check in</label>
         <input type="date" className="text-pink-600 px-5 border-none outline-none focus:outline-none"/>
         </div>
         <div>
         <label className="text-slate-300 py-2">Price</label>
         <input  type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-pink-600 px-5 border-none outline-none focus:outline-none"/>
        </div>
         <button className="bg-pink-600 px-3 py-2 w-full text-lg text-white font-bold rounded-full">submit</button>
     </form>
    </div>
  </div>;
};

export default Hero;
