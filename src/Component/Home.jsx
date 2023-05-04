import React from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import photo from "../assets/pexels-ash-376464.jpg";
import photo_too from "../assets/pexels-robin-stickel-70497.jpg";
const Home = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      // add plugins here
    ]
  );
  return (
    <div ref={sliderRef} className="flex">
      <div 
        style={{ backgroundImage: `url(${photo})` }}
        className=" w-full bg-cover bg-center h-96 mx-9 rounded-md"
      >
        <div className="text-slate-200 card w-fit mx-auto m-">
            <h2 className="text-center my-auto text-3xl bold mt-10">Cooking Never Got any Easier</h2>
            <p className="text-center mt-4 bold">Some quick example text to build on the card title and make up the bulk of the card's content...</p>
            <button className="btn btn-active btn-primary mx-auto mt-20 px-20">Cooking Box</button>
        </div>
      </div>
      {/* <div
        style={{ backgroundImage: `url(${photo})` }}
        className="w-full h-96 bg-auto  bg-center"
      >
        2
      </div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> */}
    </div>
  );
};

export default Home;
