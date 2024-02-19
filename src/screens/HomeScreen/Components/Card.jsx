import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({imgUrl, title, description, redirectUrl}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg2 p-3 md:flex rounded  gap-2">
      <img src={imgUrl} className="md:w-52 w-full object-cover rounded" />
      <div>
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="mt-2">{description}</p>
        <div className="w-full flex justify-end md:pt-0 pt-5 px-2">
          <button onClick={()=>navigate(redirectUrl)} className="bg-secondary hover:bg-primary duration-300 transition-all ease-in-out w-full md:w-auto py-1 px-2 rounded text-white">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
