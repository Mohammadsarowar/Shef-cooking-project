import React from "react";
import {
  HandThumbUpIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { handler } from "daisyui";
import { Link } from "react-router-dom";
const Card = ({ loopData }) => {
  const { id, chefPicture, chefName, likes, yearsOfExperience, recipes } =
    loopData;
  console.log();
  return (
    <div className="mx-auto mt-10">
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <figure>
          <img src={chefPicture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {chefName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {" "}
              <HandThumbUpIcon className="h-6 w-6 p-1 text-blue-500" />
              {likes}
            </div>
            <div className="badge badge-outline">
              <WrenchScrewdriverIcon className="h-6 w-6 p-1 text-blue-500" />{" "}
              {yearsOfExperience}
            </div>
          </div>
          <Link to={`../details/${id}`}>
            <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
