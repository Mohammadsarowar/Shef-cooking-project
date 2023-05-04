import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState();
  const data = useLoaderData();
  const userId = useParams();
  useEffect(() => {
    if (data) {
      const findData = data.find((shif) => shif.id == userId.id);
      setDetails(findData);
    }
  }, []);
  console.log(details);
  return (
    <div className="my-10">
      <div className="card w-fit bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            className="w-96 rounded-2xl"
            src={details?.chef_picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto bold mb-5"><span>Name:</span>{details?.chef_name}</h2>
          <p className="w-96 mx-10"><span className="bold">Bio:</span> {details?.bio}</p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Recipes</th>
                  <th>Like</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>{details?.recipes}</td>
                  <td>{details?.likes}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>499</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn">
              Favourite
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-lg font-bold">
                  Congratulations Add to Favourite user!
                </h3>
                
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
