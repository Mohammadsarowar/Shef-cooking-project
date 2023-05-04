import React from "react";
import {
  HandThumbUpIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { handler } from "daisyui";
import { Link } from "react-router-dom";
const Card = ({ loopData }) => {
  const { id, chef_picture,bio, chef_name, likes,years_experience, recipes } =
    loopData;
  console.log();
  return (
    <div className="mx-auto mt-10">
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <figure>
          <img className="h-96" src={chef_picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {chef_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{bio}</p>
          <div className="flex justify-between">
          <div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            <div className="badge badge-outline">
              {" "}
              <HandThumbUpIcon className="h-6 w-6 p-1 text-blue-500" />
              {likes}
            </div>
            <div className="badge badge-outline">
              <WrenchScrewdriverIcon className="h-6 w-6 p-1 text-blue-500" />{" "}
              {years_experience}
            </div>
          </div>
          <Link to={`../details/${id}`}>
            <button className="btn mt-3">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
