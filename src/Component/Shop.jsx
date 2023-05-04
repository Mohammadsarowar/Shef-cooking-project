import React, { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";

const Shop = () => {
    const [showAll,setShow] = useState(false);
  const handleShowAll = () =>{
        setShow(true)
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://the-assignment-ten-server.vercel.app")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
    <Home/>
        <div className="grid grid-cols-3 gap-5">
      {data.slice(0,showAll ?9 :6).map((loopData) => (
        <Card key={loopData.id} loopData={loopData}></Card>
      ))}
    </div>
    <div className="text-center m-5">
           {
            !showAll && (
                <button onClick={handleShowAll} className='btn' >Show All</button>
            )} 
    </div>
 
    </div>
   
  );
};

export default Shop;
