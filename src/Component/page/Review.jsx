import React from 'react';

import { FaGithub, FaGoogle ,FaStar } from "react-icons/fa";

const Review = () => {
  const ratings = [
    {
      stars: 4,
      review: 'Great food and service! Would highly recommend.',
      author: 'John Doe'
    },
    {
      stars: 5,
      review: 'Amazing experience! The food was delicious and the atmosphere was lovely.',
      author: 'Jane Smith'
    },
    {
      stars: 3,
      review: 'Food was good, but the service was a bit slow. Overall, still a decent experience.',
      author: 'Sam Lee'
    },
    {
        stars: 2,
        review: 'Disappointed with the quality of the food. Would not recommend.',
        author: 'Sarah Brown'
      },
      {
        stars: 4.5,
        review: 'Great place for a date night! Food was fantastic and service was excellent.',
        author: 'Mark Johnson'
      },
      {
        stars: 3.5,
        review: 'Decent food, but the prices are a bit high for what you get.',
        author: 'Emily Wong'
      }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Reviews</h1>
      <div className="space-y-8 grid lg:grid-cols-3 md:grid-cols-2 text-center">
        {ratings.map((rating, index) => (
          <div key={index} className="mx-auto space-x-4 items-center card w-96 bg-base-100 p-3 shadow-xl">
           
            <div className="flex-1">
              <p className="text-lg font-bold mb-2">{rating.author}</p>
              <p className="text-gray-500">{rating.review}</p>
            </div> <div className="flex items-center">
              {Array.from({ length: rating.stars }).map((_, index) => (
                <FaStar key={index} className="h-6 w-6 text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
