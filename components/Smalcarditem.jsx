import React from "react";
import Image from 'next/image'

const Smalcarditem = ({image, places, price}) => {
  return <div className="flex  items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out mt-5 m-12 ">
      <div>
          <Image src={image} width={150} height={150} alt="" />
      </div>
      
      <div>
          <h3 ckassName='font-bold'>{places}</h3>
          <p className='text-gray-500'>{price}</p>
      </div>
  </div>;
};

export default Smalcarditem;
