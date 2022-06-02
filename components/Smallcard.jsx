import React from "react";
import Smalcarditem from './Smalcarditem'
import japan from '../public/assets/japan.jpg'
import cuba from '../public/assets/cuba.jpg'
import paris from '../public/assets/paris.jpg'
import light from '../public/assets/lighthouse.jpg'
import jpanwater from '../public/assets/jpanwater.jpg'

const Smallcard = () => {
  return <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <Smalcarditem image={japan} places="japan" price="$2000"/>
      <Smalcarditem image={cuba} places="japan" price="$2000"/>
      <Smalcarditem image={paris} places="japan" price="$2000"/>
      <Smalcarditem image={light} places="japan" price="$2000"/>
      <Smalcarditem image={jpanwater} places="japan" price="$2000"/>
      <Smalcarditem image={japan} places="japan" price="$2000"/>
  </div>;
};

export default Smallcard;
