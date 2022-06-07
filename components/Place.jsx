import React from "react";
import Map from "./Map";

const Place = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2">
      <Map/>
      <div className="bg-white justify-center items-center text-center">
          <h1 className="font-bold text-2xl text-pink-600 ">Journey Around the World</h1>
          <p>Go places you have always imagined we are will take care of things for you.</p>
          <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5">Click me</button>
      </div>
  </div>;
};

export default Place;
