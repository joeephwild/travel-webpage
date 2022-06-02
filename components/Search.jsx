import React, { useState } from 'react'

const Search = () => {
    const [value, setValue] = useState('$500 - $6000');
  return (
    <div>
        <div className="bg-white border-bold p-6 border-pink-600 border-4 lg:hidden block">
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
    </div>
  )
}

export default Search